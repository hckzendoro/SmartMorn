import React,{ Component } from 'react';
//import { bindActionCreators } from 'redux';
//import connect from '../store/connect';
import Link from 'next/link';
import Layout from '../components/Layout.js';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
//import { setLanguage } from '../store/store';
//import { actions as appActions } from '../store/reducers';
const PostLink = (props) => (
	<li>
		<Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
			<a>{props.title}</a>
		</Link>
	</li>
)

class Index extends Component {
	render() {
		return (
		<Layout title="หน้าเเรกนะจ๊ะ" Navbar={true}>
			<h1>My Blog</h1>
			<button>TH</button>
			<button>EN</button>
			<ul>
				<PostLink id="hello-nextjs" title="Hello Next.js"/>
				<PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
				<PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>
			</ul>
		</Layout>
	  )
	}
}

export default Index;
//export default connect(mapStateToProps,mapDispatchToProps)(Index);
// // @connect(
// //   state => ({
// // 		isFirstLoad: false,
// //   }),
// //   { ...appActions }
// // )(Index)
// const mapStateToProps = (state) => ({
// 	lang: state.lang
// })
// const mapDispatchToProps = dispatch => ({
// 	setLanguage: bindActionCreators(setLanguage, dispatch)
// })
//export default connect(mapStateToProps,mapDispatchToProps)(Index);