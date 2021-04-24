/* ページ内リンク（別ページ） */
jQuery( window ).on( 'load', function() {
    id    = location.hash;
    speed = 0;
    headerHight = 500; // 固定ヘッダーの高さ
    if ( '' != id ) {
      pos = jQuery( id ).offset().top - headerHight;
      jQuery( 'html' ).animate({ scrollTop: pos }, speed );
    }
  });