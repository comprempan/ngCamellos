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
    "        <div class=\"results column g-10 centered\">\n" +
    "            <table>\n" +
    "                <thead>\n" +
    "                    <tr>\n" +
    "                        <th colspan=\"4\">Jornada 1</th>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                    </tr>\n" +
    "                    </thead>\n" +
    "                    <tbody>\n" +
    "                        <tr class=\"descansa \">\n" +
    "                            <td>\n" +
    "                                Descansa\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                -\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                -\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                FS Pichanfles <span class=\"hide-on-phones\">Evolution</span>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>\n" +
    "                                FS La Bombonera RC\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                3\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                1\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                FS Kiwana All Star\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>\n" +
    "                                Cafu Ole FS\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                3\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                3\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                FS Sport Leganes\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>\n" +
    "                                Cavs FS\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                /\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                /\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                AT Trabenco\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr class=\"camellos\">\n" +
    "                            <td>\n" +
    "                                FS Camellos\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                1\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                6\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                FS Luz Casanova\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>\n" +
    "                                FS Puro Peru\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                1\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                1\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                FS Galicia\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>\n" +
    "                                Leganes FS Red Devils\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                3\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                13\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                FS ADIL\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>\n" +
    "                                FS Selección Botellín\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                5\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                1\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                FS Los Míticos <span class=\"hide-on-phones\"> de Leganes</span>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "            </div>\n" +
    "    </section>\n" +
    "    <section>    <table id=\"clasificacion\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th>Posición</th>\n" +
    "                <th>Equipo</th>\n" +
    "                <th>PJ</th>\n" +
    "                <th class=\"hide-on-phones\">PG</th>\n" +
    "                <th class=\"hide-on-phones\">PE</th>\n" +
    "                <th class=\"hide-on-phones\">PP</th>\n" +
    "                <th>GF</th>\n" +
    "                <th>GC</th>\n" +
    "                <th>DG</th>\n" +
    "                <th>PT</th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "\n" +
    "    <tbody>\n" +
    "            <tr>\n" +
    "        <td>\n" +
    "            1\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            FS Selección Botellín\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            7\n" +
    "        </td>\n" +
    "        <td class=\"hide-on-phones\">\n" +
    "            6\n" +
    "        </td>\n" +
    "         <td class=\"hide-on-phones\">\n" +
    "            0\n" +
    "        </td>\n" +
    "         <td class=\"hide-on-phones\">\n" +
    "            1\n" +
    "        </td>\n" +
    "         <td>\n" +
    "            40\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            13\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            27\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            18\n" +
    "        </td>\n" +
    "    </tr>    <tr>\n" +
    "        <td>\n" +
    "            2\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            FS Pichanfles\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            7\n" +
    "        </td>\n" +
    "        <td class=\"hide-on-phones\">\n" +
    "            5\n" +
    "        </td>\n" +
    "         <td class=\"hide-on-phones\">\n" +
    "            1\n" +
    "        </td>\n" +
    "         <td class=\"hide-on-phones\">\n" +
    "            1\n" +
    "        </td>\n" +
    "         <td>\n" +
    "            34\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            18\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            16\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            16\n" +
    "        </td>\n" +
    "    </tr>    <tr>\n" +
    "        <td>\n" +
    "            3\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            FS Luz Casanova\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            7\n" +
    "        </td>\n" +
    "        <td class=\"hide-on-phones\">\n" +
    "            4\n" +
    "        </td>\n" +
    "         <td class=\"hide-on-phones\">\n" +
    "            3\n" +
    "        </td>\n" +
    "         <td class=\"hide-on-phones\">\n" +
    "            0\n" +
    "        </td>\n" +
    "         <td>\n" +
    "            26\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            17\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            9\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            15\n" +
    "        </td>\n" +
    "    </tr>    <tr>\n" +
    "        <td>\n" +
    "            4\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            FS La Bombonera\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            7\n" +
    "        </td>\n" +
    "        <td class=\"hide-on-phones\">\n" +
    "            5\n" +
    "        </td>\n" +
    "         <td class=\"hide-on-phones\">\n" +
    "            6\n" +
    "        </td>\n" +
    "         <td class=\"hide-on-phones\">\n" +
    "            2\n" +
    "        </td>\n" +
    "         <td>\n" +
    "            24\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            15\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            9\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            21\n" +
    "        </td>\n" +
    "    </tr>    <tr>\n" +
    "        <td>\n" +
    "            5\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            Cavs FS\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            7\n" +
    "        </td>\n" +
    "        <td class=\"hide-on-phones\">\n" +
    "            4\n" +
    "        </td>\n" +
    "         <td class=\"hide-on-phones\">\n" +
    "            2\n" +
    "        </td>\n" +
    "         <td class=\"hide-on-phones\">\n" +
    "            1\n" +
    "        </td>\n" +
    "         <td>\n" +
    "            33\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            20\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            13\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            14\n" +
    "        </td>\n" +
    "    </tr>    <tr>\n" +
    "        <td>\n" +
    "            6\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            FS Kiwana All Star\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            6\n" +
    "        </td>\n" +
    "        <td class=\"hide-on-phones\">\n" +
    "            4\n" +
    "        </td>\n" +
    "         <td class=\"hide-on-phones\">\n" +
    "            0\n" +
    "        </td>\n" +
    "         <td class=\"hide-on-phones\">\n" +
    "            2\n" +
    "        </td>\n" +
    "         <td>\n" +
    "            31\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            22\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            9\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            12\n" +
    "        </td>\n" +
    "    </tr>    <tr>\n" +
    "        <td>\n" +
    "            7\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            ADIL FS\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            6\n" +
    "        </td>\n" +
    "        <td class=\"hide-on-phones\">\n" +
    "            3\n" +
    "        </td>\n" +
    "         <td class=\"hide-on-phones\">\n" +
    "            1\n" +
    "        </td>\n" +
    "         <td class=\"hide-on-phones\">\n" +
    "            2\n" +
    "        </td>\n" +
    "         <td>\n" +
    "            33\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            20\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            13\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            10\n" +
    "        </td>\n" +
    "    </tr>    <tr>\n" +
    "        <td>\n" +
    "            8\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            FS Galicia\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            6\n" +
    "        </td>\n" +
    "        <td class=\"hide-on-phones\">\n" +
    "            3\n" +
    "        </td>\n" +
    "         <td class=\"hide-on-phones\">\n" +
    "            1\n" +
    "        </td>\n" +
    "         <td class=\"hide-on-phones\">\n" +
    "            2\n" +
    "        </td>\n" +
    "         <td>\n" +
    "            26\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            22\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            4\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            10\n" +
    "        </td>\n" +
    "    </tr>    <tr>\n" +
    "        <td>\n" +
    "            9\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            FS Los Míticos\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            6\n" +
    "        </td>\n" +
    "        <td class=\"hide-on-phones\">\n" +
    "            2\n" +
    "        </td>\n" +
    "         <td class=\"hide-on-phones\">\n" +
    "            0\n" +
    "        </td>\n" +
    "         <td class=\"hide-on-phones\">\n" +
    "            4\n" +
    "        </td>\n" +
    "         <td>\n" +
    "            19\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            27\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            -8\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            6\n" +
    "        </td>\n" +
    "    </tr>    <tr>\n" +
    "        <td>\n" +
    "            10\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            FS Puro Perú\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            6\n" +
    "        </td>\n" +
    "        <td class=\"hide-on-phones\">\n" +
    "            1\n" +
    "        </td>\n" +
    "         <td class=\"hide-on-phones\">\n" +
    "            2\n" +
    "        </td>\n" +
    "         <td class=\"hide-on-phones\">\n" +
    "            3\n" +
    "        </td>\n" +
    "         <td>\n" +
    "            16\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            24\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            -8\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            5\n" +
    "        </td>\n" +
    "    </tr>    <tr>\n" +
    "        <td>\n" +
    "            11\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            FS Sport Leganés\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            7\n" +
    "        </td>\n" +
    "        <td class=\"hide-on-phones\">\n" +
    "            1\n" +
    "        </td>\n" +
    "         <td class=\"hide-on-phones\">\n" +
    "            2\n" +
    "        </td>\n" +
    "         <td class=\"hide-on-phones\">\n" +
    "            4\n" +
    "        </td>\n" +
    "         <td>\n" +
    "            17\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            24\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            -7\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            5\n" +
    "        </td>\n" +
    "    </tr>    <tr>\n" +
    "        <td>\n" +
    "            12\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            Cafu Ole FS\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            8\n" +
    "        </td>\n" +
    "        <td class=\"hide-on-phones\">\n" +
    "            1\n" +
    "        </td>\n" +
    "         <td class=\"hide-on-phones\">\n" +
    "            2\n" +
    "        </td>\n" +
    "         <td class=\"hide-on-phones\">\n" +
    "            5\n" +
    "        </td>\n" +
    "         <td>\n" +
    "            21\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            34\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            -13\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            5\n" +
    "        </td>\n" +
    "    </tr>    <tr class=\"camellos\">\n" +
    "        <td>\n" +
    "            13\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            FS Camellos\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            7\n" +
    "        </td>\n" +
    "        <td class=\"hide-on-phones\">\n" +
    "            1\n" +
    "        </td>\n" +
    "         <td class=\"hide-on-phones\">\n" +
    "            0\n" +
    "        </td>\n" +
    "         <td class=\"hide-on-phones\">\n" +
    "            6\n" +
    "        </td>\n" +
    "         <td>\n" +
    "            22\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            48\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            -26\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            3\n" +
    "        </td>\n" +
    "    </tr>    <tr>\n" +
    "        <td>\n" +
    "            14\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            Leganes FS Red Devils\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            7\n" +
    "        </td>\n" +
    "        <td class=\"hide-on-phones\">\n" +
    "            1\n" +
    "        </td>\n" +
    "         <td class=\"hide-on-phones\">\n" +
    "            0\n" +
    "        </td>\n" +
    "         <td class=\"hide-on-phones\">\n" +
    "            7\n" +
    "        </td>\n" +
    "         <td>\n" +
    "            20\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            52\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            -32\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            3\n" +
    "        </td>\n" +
    "    </tr>    <tr>\n" +
    "        <td>\n" +
    "            15\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            FS AT Trabenco\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            1\n" +
    "        </td>\n" +
    "        <td class=\"hide-on-phones\">\n" +
    "            0\n" +
    "        </td>\n" +
    "         <td class=\"hide-on-phones\">\n" +
    "            0\n" +
    "        </td>\n" +
    "         <td class=\"hide-on-phones\">\n" +
    "            1\n" +
    "        </td>\n" +
    "         <td>\n" +
    "            0\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            1\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            -1\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            0\n" +
    "        </td>\n" +
    "    </tr>    <tr>\n" +
    "        <td>\n" +
    "            16\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            Descansa\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            8\n" +
    "        </td>\n" +
    "        <td class=\"hide-on-phones\">\n" +
    "            0\n" +
    "        </td>\n" +
    "         <td class=\"hide-on-phones\">\n" +
    "            0\n" +
    "        </td>\n" +
    "         <td class=\"hide-on-phones\">\n" +
    "            0\n" +
    "        </td>\n" +
    "         <td>\n" +
    "            0\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            0\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            0\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            0\n" +
    "        </td>\n" +
    "    </tr></tbody></table> </section>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/home/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/home/home.html",
    "<cm-header></cm-header>\n" +
    "<div id=\"container\">\n" +
    "	<div id=\"wrapper\" ui-view></div>	\n" +
    "</div>");
}]);
