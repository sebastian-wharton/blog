import styles from '../../styles/Blog.module.css';

export const metaData = {
	title: 'Blog Main',
};

const blogHome = () => {
	return (
		<>
			<h1 className={styles.title}>Header Styles test</h1>
			<div>Blog</div>
		</>
	);
};
export default blogHome;
