import { connect } from 'react-redux'
import actions from '../actions'
import Catalog from '../components/catalog/Catalog'
import PhoneItem from '../components/phone/PhoneItem'
import PhoneDetail from './PhoneDetail'

const mapStateToProps = state => ({
  items: state.phones.items,
  pagination: {
    currentPage: state.phones.pagination.currentPage,
    size: state.phones.pagination.size,
    totalItems: state.phones.total
  },
  title: 'Phone catalog',
  DetailComponent: PhoneDetail,
  ItemComponent: PhoneItem
})

const mapDispatchToProps = dispatch => ({
  onClickItem: id => {
    dispatch(actions.hidePhoneDetail(id))
    dispatch(actions.getPhoneDetail(id))
  },
  onClickPage: newPage => {
    dispatch(actions.getPhones(newPage))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Catalog)
