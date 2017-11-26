angular.module('templates-main', ['app/components/header/header.html', 'app/home/home-content.html', 'app/home/home.html']);

angular.module("app/components/header/header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/components/header/header.html",
    "<header>\n" +
    "	<div id=\"title\">\n" +
    "		<h1>f.s. Camellos</h1>\n" +
    "	</div>\n" +
    "	<div id=\"menu\">\n" +
    "		<nav>\n" +
    "			<div id=\"mobile-header\" class=\"hide-on-desktops hide-on-tablets\">\n" +
    "				<a id=\"responsive-menu-button\" href=\"#sidr\">Menu</a>\n" +
    "			</div>\n" +
    "			<div id=\"mainMenuContainer\" class=\"hide-on-phones\">\n" +
    "				<ul>\n" +
    "					<li ng-repeat=\"option in vm.menuOptions\">\n" +
    "						<a class=\"navigation\"\n" +
    "							ui-sref=\"{{option.href}}\"\n" +
    "							ui-sref-active=\"active\">\n" +
    "							{{option.text}}\n" +
    "						</a>\n" +
    "					</li>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "		</nav>\n" +
    "	</div>\n" +
    "</header>\n" +
    "");
}]);

angular.module("app/home/home-content.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/home/home-content.html",
    "<p ng-if=\"vm.loading\">cargando</p>\n" +
    "<div id=\"content\" ng-if=\"!vm.loading\">\n" +
    "    <section class=\"row\">\n" +
    "        <div class=\"results column g-6\">\n" +
    "            <table>\n" +
    "                <thead>\n" +
    "                    <tr>\n" +
    "                        <th colspan=\"4\">{{vm.previousMatch.name}} ({{vm.previousMatch.fecha | date : \"dd-MM-yyyy\"}})</th>\n" +
    "                    </tr>\n" +
    "                </thead>\n" +
    "                <tbody>\n" +
    "                    <tr \n" +
    "                        ng-class=\"{'camellos': match.local === 'FS Camellos' || match.visitante === 'FS Camellos'}\"\n" +
    "                        ng-repeat=\"match in vm.previousMatch.partidos\">\n" +
    "                        <td>\n" +
    "                            {{match.local}}\n" +
    "                        </td>\n" +
    "                        <td>\n" +
    "                            {{match.golesLocales}}\n" +
    "                        </td>\n" +
    "                        <td>\n" +
    "                            {{match.golesVisitantes}}\n" +
    "                        </td>\n" +
    "                        <td>\n" +
    "                            {{match.visitante}}\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "        <div class=\"results column g-6\">\n" +
    "            <table>\n" +
    "                <thead>\n" +
    "                    <tr>\n" +
    "                        <th colspan=\"4\">{{vm.nextMatch.name}} ({{vm.nextMatch.fecha | date : \"dd-MM-yyyy\"}})</th>\n" +
    "                    </tr>\n" +
    "                </thead>\n" +
    "                <tbody>\n" +
    "                    <tr \n" +
    "                        ng-class=\"{'camellos': match.local === 'FS Camellos' || match.visitante === 'FS Camellos'}\"\n" +
    "                        ng-repeat=\"match in vm.nextMatch.partidos\">\n" +
    "                        <td>\n" +
    "                            {{match.local}}\n" +
    "                        </td>\n" +
    "                        <td>\n" +
    "                            {{match.golesLocales}}\n" +
    "                        </td>\n" +
    "                        <td>\n" +
    "                            {{match.golesVisitantes}}\n" +
    "                        </td>\n" +
    "                        <td>\n" +
    "                            {{match.visitante}}\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "    <section>\n" +
    "        <table id=\"clasificacion\">\n" +
    "            <thead>\n" +
    "                <tr>\n" +
    "                    <th>Posición</th>\n" +
    "                    <th>Equipo</th>\n" +
    "                    <th>PJ</th>\n" +
    "                    <th class=\"hide-on-phones\">PG</th>\n" +
    "                    <th class=\"hide-on-phones\">PE</th>\n" +
    "                    <th class=\"hide-on-phones\">PP</th>\n" +
    "                    <th>GF</th>\n" +
    "                    <th>GC</th>\n" +
    "                    <th>DG</th>\n" +
    "                    <th>PT</th>\n" +
    "                </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "                <tr \n" +
    "                    ng-class=\"{'camellos': team.name === 'FS Camellos'}\"\n" +
    "                    ng-repeat=\"team in vm.clasification | orderBy:'puntos':true:vm.test\">\n" +
    "                    <td>{{$index + 1}}</td>\n" +
    "                    <td>{{team.name}}</td>\n" +
    "                    <td>{{team.jugados}}</td>\n" +
    "                    <td>{{team.ganados}}</td>\n" +
    "                    <td>{{team.empatados}}</td>\n" +
    "                    <td>{{team.perdidos}}</td>\n" +
    "                    <td>{{team.golesFavor}}</td>\n" +
    "                    <td>{{team.golesContra}}</td>\n" +
    "                    <td>{{team.golesFavor - team.golesContra}}</td>\n" +
    "                    <td>{{team.puntos}}</td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "\n" +
    "        <table class=\"friends\">\n" +
    "            <tr>\n" +
    "              <th>Name</th>\n" +
    "              <th>Favorite Letter</th>\n" +
    "            </tr>\n" +
    "            <tr ng-repeat=\"friend in friends | orderBy:'favoriteLetter'\">\n" +
    "              <td>{{friend.name}}</td>\n" +
    "              <td>{{friend.favoriteLetter}}</td>\n" +
    "            </tr>\n" +
    "          </table>\n" +
    "    </section>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("app/home/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/home/home.html",
    "<cm-header></cm-header>\n" +
    "<div id=\"container\">\n" +
    "	<div id=\"wrapper\" ui-view></div>	\n" +
    "</div>");
}]);
