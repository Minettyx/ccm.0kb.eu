$(function() {

  document.getElementById("menu").innerHTML = '<div class=\"ui attached stackable menu\">\r\n        <div class=\"ui container\">\r\n          <a class=\"item\" href=\"\/\">\r\n            <i class=\"home icon\"><\/i> Home\r\n          <\/a>\r\n          <a class=\"item\" href=\"\/archive\">\r\n            <i class=\"archive icon\"><\/i> Archivio\r\n          <\/a>\r\n          <a class=\"item\" href=\"\/staff\">\r\n            <i class=\"users icon\"><\/i> Staff\r\n          <\/a>\r\n          <a class=\"item\" href=\"https:\/\/mangadex.org\/group\/12728\/ccm-translations\" target=\"_blank\">\r\n            <i class=\"book icon\"><\/i> MangaDex\r\n          <\/a>\r\n          <div class=\"ui simple dropdown item\">\r\n            <i class=\"telegram plane icon\"><\/i> Telegram\r\n            <i class=\"dropdown icon\"><\/i>\r\n            <div class=\"menu\">\r\n              <a class=\"item\" href=\"https:\/\/t.me\/ccmtranslations\" target=\"_blank\">Canale aggiornamenti<\/a>\r\n              <a class=\"item\" href=\"https:\/\/t.me\/ccmtranslationsbot\" target=\"_blank\">Support bot<\/a>\r\n            <\/div>\r\n          <\/div>\r\n          <a class=\"item\" href=\"https:\/\/github.com\/Minettyx\/ccm.0kb.eu\" target=\"_blank\">\r\n            <i class=\"github icon\"><\/i>\r\n          <\/a>\r\n          <a class=\"item\" href=\"https:\/\/github.com\/Minettyx\/ccm.0kb.eu\/issues\" target=\"_blank\">\r\n            <i class=\"exclamation circle icon\"><\/i>\r\n          <\/a>\r\n          <div class=\"right item\">\r\n            <div class=\"ui disabled icon input\" data-content=\"Work in progress\"><i class=\"search icon\"><\/i><input type=\"text\" placeholder=\"Search...\"><\/div>\r\n          <\/div>\r\n        <\/div>\r\n      <\/div>';

  $('.ui.icon.input').popup();

});
