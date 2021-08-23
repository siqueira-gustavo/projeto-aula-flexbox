/*
 * PROJETO - Recriando a página do Instagram - Aula de Flexbox
 * Bootcamp: HTML Web Developer - Digital Inovation One
 * Usando jQuery para adicionar botão que ativa / desativa o Dark Mode
 * Código jQuery adaptado de https://www.developerdrive.com/css-dark-mode/
 * 
 * Gustavo Siqueira
 */

$( ".inner-switch" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
      $( "body" ).removeClass( "dark" );
      $( ".inner-switch" ).text( "OFF" );
      $( ".instagram-logo").attr( "src", "./img/instagram-logo.png" );
    } else {
      $( "body" ).addClass( "dark" );
      $( ".inner-switch" ).text( "ON" );
      $( ".instagram-logo" ).attr( "src", "./img/instagram-logo-white.png" );
    }
});