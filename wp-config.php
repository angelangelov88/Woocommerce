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

 * * MySQL settings

 * * Secret keys

 * * Database table prefix

 * * ABSPATH

 *

 * @link https://wordpress.org/support/article/editing-wp-config-php/

 *

 * @package WordPress

 */


// ** MySQL settings - You can get this info from your web host ** //

/** The name of the database for WordPress */

define( 'DB_NAME', "angelang_woocommerce" );


/** MySQL database username */

define( 'DB_USER', "angelang_user" );


/** MySQL database password */

define( 'DB_PASSWORD', "Q3LQFGQLue2HwNC" );


/** MySQL hostname */

define( 'DB_HOST', "localhost" );


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

define( 'AUTH_KEY',         '1,c?Rf*KL:nB#P]3y=WlF.Of/^yU/?}<iQCd9gZf*dH$,,=:KQ7($bWFoQiCK}]#' );

define( 'SECURE_AUTH_KEY',  '-!%bDN.<|#f,/QTm<zSwk:5Xe]AA@n,Jig/_D-F|$aB/oN%a&NCN.gb8q@y@>uo:' );

define( 'LOGGED_IN_KEY',    '7E~HQ[jR2+VwsXw7sx_3Ox9tu kg?^a/P)roq@|y4O:B_|=S]_[tXqWPTxzur2t(' );

define( 'NONCE_KEY',        'A_vO`;(F^IL-:;J2}a|T`Njqja/ZZz@L?gx*-LZWV}vux&Kc8gnikN0V?Tz+/Rn*' );

define( 'AUTH_SALT',        '@lM~,zSfLVnX0,}q[l8[4JUAKYg Bz_8&O+mq^YoNb$UmGl}b7D,|oHr>^+8O@#N' );

define( 'SECURE_AUTH_SALT', 'g9K{%uL*>VXuIRtaW!Kx(&3d$$Lv#~x! =K#39}bb_P7*>mi=%j_b)R-CSk&d{ai' );

define( 'LOGGED_IN_SALT',   'T]B <Wg4~8;ni3*W;$d-XO1u,(Sw3r1|j;Cb:xHcj%0`&DS[HFG^7m^Ym[{DRDl/' );

define( 'NONCE_SALT',       'in@L{%+%;P^7|bN>Z:zZ3`P!->h!>BWd@&l^O3Y}k/a$/Y|G&%p2((:76KC@H-T0' );


/**#@-*/


/**

 * WordPress database table prefix.

 *

 * You can have multiple installations in one database if you give each

 * a unique prefix. Only numbers, letters, and underscores please!

 */

$table_prefix = 'woocommerce';


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

 * @link https://wordpress.org/support/article/debugging-in-wordpress/

 */

define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */


define('WP_MEMORY_LIMIT', '256M');


/* That's all, stop editing! Happy publishing. */


/** Absolute path to the WordPress directory. */

if ( ! defined( 'ABSPATH' ) ) {

	define( 'ABSPATH', __DIR__ . '/' );

}


/** Sets up WordPress vars and included files. */

require_once ABSPATH . 'wp-settings.php';

