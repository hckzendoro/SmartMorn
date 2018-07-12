// import React, {Component} from 'react'

// class Authenticated extends Component {
// 	constructor(props) {
//         super(props)
// 		this.state = {
// 			isLoading: true
// 		};
// 	}
// 	componentDidMount () {
		
// 		if (!Auth.loggedIn()) {
// 			this.props.url.replaceTo('/')
// 		}
// 		this.setState({ isLoading: false })
//     }

//     render() {
// 		return (
// 			<div>
// 				{this.state.isLoading ? (
// 					<div>LOADING....</div>
// 				) : (
// 					<AuthComponent {...this.props}  />
// 				)}
// 			</div>
// 		)
//     }
// }

// const mapStateToProps = ({ auth }) => ({
//     isLogin : auth.isLogin,
//     errorMessage: auth.errorMessage
// })

// const mapDispatchToProps = (dispatch) => ({
//     login: bindActionCreators(auth.Login, dispatch)
// })

// export default function withAuth(AuthComponent) {
// 	const Auth = new AuthService('http://localhost:5000')
// 	return connect(mapStateToProps,mapDispatchToProps)(Authenticated);
// }