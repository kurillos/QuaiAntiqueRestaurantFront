export default class Route {

    constructor(url, title, pathHtml, authorize, pathJS = "") {

      this.url = url;

      this.title = title;

      this.pathHtml = pathHtml;

      this.pathJS = pathJS;

      this.authorize = authorize;

    }

}

/* 
[] -> Tout le monde peut y accéder
 [Disconneted] -> Authentification requise
 [Client] -> Authentification requise? réserver aux utilisateurs clients 
 [Admin] -> Authentification requise avec le rôle admin
 [ADMIN? CLIENT] -> Authentification requise avec le rôle admin ou client
*/
