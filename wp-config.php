<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'agrowthTest' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '?Bz5#:5=.(;!y]_Q&$wYxAq,9[%8f=qx>UB3rL92(y|OI.d4Q.jD,VapaG:&}1=r' );
define( 'SECURE_AUTH_KEY',  'c|rRqV9A4c<&FB|q-Z}7dtbGRGibE[X?EHlh&wG*C1,qanjzhjVHLhRd$(F(VvCG' );
define( 'LOGGED_IN_KEY',    '&pR7}(R`ijo{$z#AjOmkmPfNzd?=ccKzyV6BQvzffrU2eiDX`%1LTH~O!#*E|Vx4' );
define( 'NONCE_KEY',        '@nIsRO,% 5Ry)}bh|.d*?=~=Y8{0.ONNrktS70DjRf%4IU@R4}s5}l:vBHaekzf#' );
define( 'AUTH_SALT',        ';:=,@zDQLId3]k,Z$GmJUtAfk?#J^H E:qoQbHc,-& 6P||/S`mHkQw-KJ*A.E=#' );
define( 'SECURE_AUTH_SALT', '>xH,fG?kS^.ET+rSkTzN9S9x3=y0U]uA){p)(=$,8<Ot%zO`w.p7gwnFCyy A#}k' );
define( 'LOGGED_IN_SALT',   '@qq-JCcLEGwn0 =?]|qZ8Sm,lmUR_URhz`;DwT=@w6<R}YvHz.hSl0o{[d0}Iuv)' );
define( 'NONCE_SALT',       'L$^~k xctB;,)tO3%x$.8@mh?8>GrW[9Z;vzZQj-IsDp4++_@L4.eOz-$t6~h|05' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
