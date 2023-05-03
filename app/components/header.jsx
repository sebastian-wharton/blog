'use client';
import Link from 'next/link';

const Header = () => {
	return (
		<header className='header'>
			<div className='container-header'>
				<div className='logo'>
					<Link href='/'>Blog Logo</Link>
				</div>
				<div className='links'>
					<Link href='/blog'>Blog</Link>
					<Link href='/blog/posts'>Post</Link>
					<Link href='/projects'>Project</Link>
				</div>
			</div>
		</header>
	);
};
export default Header;
