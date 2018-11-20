import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { CssConcat } from '../../../../utils/CssConcat';

export function Header(props, context) {

	const siteTitleCss = CssConcat(styles['vert-center'], styles['site-title']);
	const siteLinksCss = CssConcat(styles.link);
  return (
  	<nav className={styles['cg-nav']}>
	    <div className={styles.header}>
	      <div className={styles.content}>
	        <h1 className={siteTitleCss}>
	        	<Link to="/">
	        		Student Comparator
	        	</Link>
	        </h1>
	        <div className={siteLinksCss}>
	        	<Link to="/Students">
	        		Students
	        	</Link>
	        	<Link to="/Classes">
	        		Classes
	        	</Link>
	        </div>
	      </div>
	    </div>
	</nav>
  );
}


export default Header;
