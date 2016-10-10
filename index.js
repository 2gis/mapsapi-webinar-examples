(function () {
    DG.then(function () {
        // Markers
        (function () {
            var map1 = DG.map('map-1', {
                'center': [54.98, 82.89],
                'zoom': 13
            });
            map1.on('click', function (e) {
                console.log(JSON.stringify([e.latlng.lat, e.latlng.lng]));
                DG.marker(e.latlng).addTo(map1);
            });
            var markers = [
                [54.98, 82.89],
                [54.98214514427189,82.91433334350587],
                [54.97406694330355,82.90540695190431],
                [54.97761367069628,82.84755706787111],
                [54.988251973363006,82.86626815795898],
                [54.976431463039525,82.86867141723634]
            ];
            for (var i in markers) {
                DG.marker(markers[i]).addTo(map1);
            }
        })();
        // Entrances
        (function () {
            var map2 = DG.map('map-2', {
                'center': [54.9805, 82.898],
                'zoom': 17
            });
            var options = {vectors: [
                "LINESTRING(82.897079 54.980906,82.897191 54.980844)",
                "LINESTRING(82.897933 54.980649,82.898045 54.980587)",
                "LINESTRING(82.897071 54.980122,82.897226 54.98013)",
                "LINESTRING(82.897354 54.979515,82.89741 54.979599)",
                "LINESTRING(82.898498 54.979826,82.898386 54.979889)"
            ]};
            document.querySelector('#case-2 button').onclick = function () {
                DG.entrance(options).addTo(map2).show(true);
            };
        })();
        // Traffic
        (function () {
            var map3 = DG.map('map-3', {
                'center': [54.99, 82.95],
                'zoom': 11
            });
            document.querySelector('#case-3 button').onclick = function () {
                map3.addLayer(new DG.Traffic());
            };
        })();
        // Popup's
        (function () {
            var map4 = DG.map('map-4', {
                'center': [54.9805, 82.898],
                'zoom': 17
            });
            document.querySelector('#case-4 button').onclick = function () {
                DG.popup()
                    .setLatLng([54.98, 82.898])
                    .setContent('<h3>Заголовок</h3><p>Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Nullam tincidunt adipiscing enim.</p>')
                    .openOn(map4);
            };
        })();
        // Geometries.
        (function () {
            var map5 = DG.map('map-5', {
                'center': [54.9805, 82.898],
                'zoom': 17
            });
            var object;
            document.querySelector('#case-5 .show-circle').onclick = function () {
                if (object) {
                    map5.removeLayer(object);
                }
                object = DG.circle([54.9805, 82.898], {radius: 50}).addTo(map5);
                map5.fitBounds(object.getBounds());
            };
            document.querySelector('#case-5 .show-line').onclick = function () {
                if (object) {
                    map5.removeLayer(object);
                }
                var latlngs = [
                    [54.970716968669194,82.86051750183107],
                    [54.97278610364531,82.90240287780763],
                    [54.97869733047144,82.91253089904787],
                    [54.98549416559231,82.91390419006349],
                    [54.99317615882207,82.91356086730958],
                    [54.98313017954608,82.89673805236818],
                    [54.99199440941322,82.88025856018068]
                ];
                object = DG.polyline(latlngs, {color: 'blue', weight: 5}).addTo(map5);
                map5.fitBounds(object.getBounds());
            };
            document.querySelector('#case-5 .show-rectangle').onclick = function () {
                if (object) {
                    map5.removeLayer(object);
                }
                var bounds = [[55.068146002659894,82.79914855957033], [54.964213278995565,83.09028625488283]];
                object = DG.rectangle(bounds, {color: "#0000FF", weight: 1}).addTo(map5);
                map5.fitBounds(object.getBounds());
            };
            document.querySelector('#case-5 .show-polygon').onclick = function () {
                if (object) {
                    map5.removeLayer(object);
                }
                var latlngs = [
                    [55.03705472294755,82.94651448726655],
                    [55.037214573813046,82.94705092906952],
                    [55.03703013045009,82.94793069362642],
                    [55.03664894480923,82.94884264469148],
                    [55.036243162561064,82.94906795024873],
                    [55.03580048633034,82.94888556003572],
                    [55.035572998031455,82.94832766056062],
                    [55.03576359642367,82.94732987880708],
                    [55.03627390378434,82.94657886028291],
                    [55.036605907492884,82.94629991054536]
                ];
                object = DG.polygon(latlngs, {color: "#0000ff", weight: 3, fillOpacity: 0.1}).addTo(map5);
                map5.fitBounds(object.getBounds());
            };
        })();
        // Cluster.
        DG.then(function() {
            // загрузка кода модуля
            return DG.plugin('http://2gis.github.io/mapsapi/vendors/Leaflet.markerCluster/leaflet.markercluster-src.js');
        }).then(function() {
            var map6 = DG.map('map-6', {
                center: DG.latLng(54.92, 82.82),
                zoom: 12
            });

            var markers = DG.markerClusterGroup();

            // обработка координат для установки маркеров
            for (var i = 0; i < addressPoints.length; i++) {
                var a = addressPoints[i];
                var title = a[2];
                var marker = DG.marker([a[0], a[1]], { title: title });
                marker.bindPopup(title);
                markers.addLayer(marker);
            }

            map6.addLayer(markers);
        });
        // Heat map.
        DG.then(function() {
            return DG.plugin('http://2gis.github.io/mapsapi/vendors/HeatLayer/heatLayer.js');
        }).then(function() {
            var map7 = DG.map('map-7', {
                center: DG.latLng(54.89, 82.45),
                zoom: 10
            });

            DG.heatLayer(addressPoints1).addTo(map7);
        });
    });
})();
