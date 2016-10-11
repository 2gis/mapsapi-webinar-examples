(function () {
    DG.then(function () {
        // Markers
        (function () {
            var map = DG.map('map-1', {
                'center': [54.98, 82.89],
                'zoom': 13
            });
            map.on('click', function (e) {
                console.log(JSON.stringify([e.latlng.lat, e.latlng.lng]));
                DG.marker(e.latlng).addTo(map);
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
                DG.marker(markers[i]).addTo(map);
            }
        })();
        // Entrances
        (function () {
            var map = DG.map('map-2', {
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
                DG.entrance(options).addTo(map).show(true);
            };
        })();
        // Traffic
        (function () {
            var map = DG.map('map-3', {
                'center': [54.99, 82.95],
                'zoom': 11
            });
            document.querySelector('#case-3 button').onclick = function () {
                map.addLayer(new DG.Traffic());
            };
        })();
        // Popup's
        (function () {
            var map = DG.map('map-4', {
                'center': [54.9805, 82.898],
                'zoom': 17
            });
            document.querySelector('#case-4 button').onclick = function () {
                DG.popup()
                    .setLatLng([54.9795, 82.898])
                    .setContent('<h3>Заголовок</h3>' +
                        '<p>Nulla neque dolor, sagittis eget, iaculis qui' +
                        's, molestie non, velit. Nullam tincidunt adipiscing enim.</p>' +
                        '<img src="http://placehold.it/200x100">' +
                        '<p>Fusce convallis metus id felis luctus adipiscing. Aliquam eu nunc. Nunc nec neque.</p>')
                    .openOn(map);
            };
        })();
        // Geometries.
        (function () {
            var map = DG.map('map-5', {
                'center': [54.9805, 82.898],
                'zoom': 17
            });
            var object;
            document.querySelector('#case-5 .show-circle').onclick = function () {
                if (object) {
                    map.removeLayer(object);
                }
                object = DG.circle([54.9805, 82.898], {radius: 50}).addTo(map);
                map.fitBounds(object.getBounds());
            };
            document.querySelector('#case-5 .show-line').onclick = function () {
                if (object) {
                    map.removeLayer(object);
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
                object = DG.polyline(latlngs, {color: 'blue', weight: 5}).addTo(map);
                map.fitBounds(object.getBounds());
            };
            document.querySelector('#case-5 .show-rectangle').onclick = function () {
                if (object) {
                    map.removeLayer(object);
                }
                var bounds = [[55.068146002659894,82.79914855957033], [54.964213278995565,83.09028625488283]];
                object = DG.rectangle(bounds, {color: "#0000FF", weight: 1}).addTo(map);
                map.fitBounds(object.getBounds());
            };
            document.querySelector('#case-5 .show-polygon').onclick = function () {
                if (object) {
                    map.removeLayer(object);
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
                object = DG.polygon(latlngs, {color: "#0000ff", weight: 3, fillOpacity: 0.1}).addTo(map);
                map.fitBounds(object.getBounds());
            };
        })();
        // Route
        (function () {
            var map = DG.map('map-6', {
                'center': [55.02546383579584, 82.9677200317383],
                'zoom': 12
            });
            var object, one, two, man;
            document.querySelector('#case-6 button').onclick = function () {
                if (object) {
                    map.removeLayer(object);
                }
                if (one) {
                    map.removeLayer(one);
                }
                if (two) {
                    map.removeLayer(two);
                }
                if (man) {
                    map.removeLayer(man);
                }
                var latlngs = [["55.0261749901807","82.9234532445218"],["55.025005743944","82.926272607041"],["55.0240873840096","82.9284869542164"],["55.0235757872051","82.92972025127"],["55.0230908144221","82.9306727349657"],["55.0206131654297","82.9346760770294"],["55.0194521177521","82.9374800783573"],["55.0185034865352","82.9397706925002"],["55.0161341068827","82.9454917032187"],["55.0159172048101","82.9460152413663"],["55.0158088565699","82.9462766511139"],["55.0154247573665","82.9472038921502"],["55.0148285471432","82.9486432627299"],["55.014763866832","82.9487544741621"],["55.0148726308706","82.9488929943789"],["55.016862903667","82.9513695597857"],["55.0178316526726","82.9525751887285"],["55.0186136340013","82.9535484235073"],["55.0193192106068","82.9545035123174"],["55.020297861357","82.9557216278427"],["55.022729287299","82.9587485011925"],["55.0238612356005","82.9601578680418"],["55.0238905492959","82.9601943396423"],["55.0247293350513","82.9612386311601"],["55.0252904080093","82.9619373407881"],["55.0253810294284","82.9620940069736"],["55.0275393169082","82.9647816764722"],["55.0288716552649","82.9663821149824"],["55.0310403834127","82.9689900140837"],["55.0318352119282","82.9700287360467"],["55.0330196854927","82.9716201015726"],["55.0334437056844","82.9721897232942"],["55.036203132194","82.9758980586186"],["55.0372365201003","82.9772869438794"],["55.0374116207205","82.9775249974297"],["55.0383424683019","82.9787989881656"],["55.041289794054","82.9828522765591"],["55.041662347101","82.9833649450917"],["55.0423300141188","82.9843183271028"],["55.0425617321459","82.9847082857676"],["55.0427706486253","82.985171277465"],["55.0429747151223","82.9857127819183"],["55.0431700113531","82.9863485196449"],["55.043346375511","82.9871059790925"],["55.0434991653559","82.9879703380588"],["55.0435176837342","82.9880749019579"],["55.0435455902434","82.988231657975"],["55.0439777001875","82.990675614537"],["55.0443734400801","82.9930323446848"],["55.0443978899915","82.9933892453472"],["55.0444671130773","82.9942622281403"],["55.0445735265732","82.9951984523294"],["55.0447866622024","82.9962602609953"],["55.0448374700195","82.9965047824156"],["55.040572998805","82.998845612383"],["55.0381762968604","83.0001606561274"],["55.0362962568648","83.0011930898834"],["55.0358965157445","83.0014128178019"],["55.0357099547592","83.0013122963216"],["55.0327094843669","83.0024732789948"],["55.0326269287707","83.0025414611249"],["55.0325707908677","83.0026524030625"],["55.0325444761985","83.0027937978882"],["55.0325433410555","83.0028236219556"],["55.0325448889778","83.0028445527018"],["55.0325522158089","83.0029455233397"],["55.032587611608","83.0030674247237"],["55.0326393121211","83.0031579749044"],["55.0334796166545","83.0041790898878"],["55.0336039117023","83.0043947753876"],["55.0336968360574","83.0046767565552"],["55.0337577707891","83.0049851481923"],["55.0339433089926","83.0066718249697"],["55.0344466208803","83.0112482921847"],["55.0344650402723","83.0116185777448"],["55.0344508516658","83.0119483492856"],["55.0344088017659","83.0122567409227"],["55.0343115450791","83.0125933396596"],["55.033760350581","83.0139697383379"],["55.0337251622059","83.0141138281095"],["55.0336913152939","83.0142553127667"],["55.0336611832627","83.014570711263"],["55.0336641758284","83.0148618552466"],["55.0339890742622","83.0183928631339"],["55.0340031598419","83.0185462953844"],["55.0341576881281","83.0202196770957"],["55.034029163976","83.020255609707"],["55.0294369012977","83.0215386734273"],["55.0272038902724","83.0221621042345"],["55.0253407762039","83.0226824084471"],["55.0252563991206","83.0226926492413"],["55.024440848","83.022661657364"],["55.0243884143513","83.0226466554988"],["55.024336445106","83.0226155737899"],["55.0237041385984","83.0219290812498"],["55.0234916644355","83.0217492385299"],["55.0227996318053","83.0212536379877"],["55.0206566750284","83.0197196748085"],["55.0210933167732","83.0178715707745"],["55.0211174196713","83.0176539089812"],["55.0211076133548","83.0174292403286"],["55.0210928006511","83.0173249459241"],["55.0200742205367","83.0103193443494"]];

                one = DG.marker(latlngs[0]).addTo(map);
                man = DG.marker(latlngs[0]).addTo(map);
                man.setIcon(DG.icon({
                    iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAABPCAYAAACHxrc8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AoLBiEdrDUrCgAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAK7SURBVGje7VlLjtswDOWTncwsWp+iRXqG5ARZ5Sy5Rpc9SdGT9CIFuuiinYzNLoaaagzbomV9jNQCggCxTT+RT+QjA2am0AXA+zAzI8h2CDANoKUATQ5QIc+pPRYKKNRzhjIv7QZNTm/NsWdyg0pG/lxemwR2uVw+FwM+dSpTh3HqhBYLpW/jRYGtkvyrBtY0zc/7In+oZNk4ljuMKmClwmli7C6FJjMxjRUTikvBzXnepDS+5DncVfuWK5+oPtfr9SMR8dKPOAK+9416DACYmZ1vjp0uAMD5jVXkTwXK2XglnuOQIp6EgLJREBEDGMRQl2zfZONsPcjMrRpYwnUTmlVE1LmgvKFMLRSBT++JqBIem9UoWHtCAeyZ+UkFLPNooJLD0FnurUXBMhHtvB4rMUiRkGKU/KWmOwAeJJyra0Z+j6aLUt5ywtkVk9a+vGnLYJ3bW1YbeLhWaUuSiegVSN5qx7jGzC9lYGoHEsIqotP2wqWHCfDvIN4YQ7+XayzgbhGA7RxF246GqGmaHxPeuokBw8zPkTjm2PnwOHVvPaHNa/GorRCL9P7pdPoqoaR/34zB+0deWAmgvQPKRGxGamvTguzdt4Nc7AAYN8H1yGhBdRH41bo9hby/te9/7TP6RXyoc4nYlJihXsLaf/OuOf3GUmBJZxermo9twO4O2OFw+J5N0c6dAvgKvkIQ/EehdJPvqoDFmP5AVhRgWmNjI6X+bZpozA2lb57WhQJLSn4AtRJYnFAKt4zCI63CnJXqb2iinsEGqgcuciq3WrkB24BlWKqhipSLTllyBtfxePxmy46bVsZSjEqPuQYX6LGGiH5p811U2eO53ibjmG+nnut/iglFz/Wu5KlEkXShCGUXq8DPDuVYp3M+n79MhVL+/kvTvjlTn6HxqKGXv/ie+ylD0ohRKlwiIvoL3LktNxtAYRoAAAAASUVORK5CYII=',
                    iconSize: [19, 39]
                }));
                two = DG.marker(latlngs[latlngs.length - 1]).addTo(map);

                object = DG.polyline([], {color: 'blue', weight: 4.5}).addTo(map);
                var i = 0;
                var timer = setInterval(function () {
                    if (i < latlngs.length) {
                        i++;
                    }
                    else {
                        map.removeLayer(man);
                        clearInterval(timer);
                    }
                    man.setLatLng(latlngs[i - 1]);
                    object.setLatLngs(latlngs.slice(0, i));
                }, 40)

            };
            window.map = map;

        })();
        // Geolocation
        (function () {
            var map = DG.map('map-7', {
                'center': [54.98, 82.89],
                'zoom': 13
            });
            function onLocationFound(e) {
                var radius = e.accuracy / 2;

                DG.marker(e.latlng).addTo(map)
                    .bindPopup("Возможно вы находитесь здесь").openPopup();

                DG.circle(e.latlng, radius).addTo(map);

            }
            map.on('locationfound', onLocationFound);

            document.querySelector('#case-7 button').onclick = function () {
                map.locate({setView: true, maxZoom: 18});

            };

        })();
        // Cluster.
        DG.then(function() {
            // загрузка кода модуля
            return DG.plugin('https://2gis.github.io/mapsapi/vendors/Leaflet.markerCluster/leaflet.markercluster-src.js');
        }).then(function() {
            var map = DG.map('map-8', {
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

            map.addLayer(markers);
        });
        // Heat map.
        DG.then(function() {
            return DG.plugin('https://2gis.github.io/mapsapi/vendors/HeatLayer/heatLayer.js');
        }).then(function() {
            var map = DG.map('map-9', {
                center: DG.latLng(54.89, 82.45),
                zoom: 10
            });

            DG.heatLayer(addressPoints1).addTo(map);
        });
        // Gradient.
        DG.then(function() {
            return DG.plugin('leaflet.hotline.js');
        }).then(function() {
            var map8 = DG.map('map-10', {
                'center': [54.9805, 82.898],
                'zoom': 13
            });

            var latlngs = [
                [54.970716968669194,82.86051750183107, 0],
                [54.97278610364531,82.90240287780763, 0.14],
                [54.97869733047144,82.91253089904787, 0.28],
                [54.98549416559231,82.91390419006349, 0.42],
                [54.99317615882207,82.91356086730958, 0.56],
                [54.98313017954608,82.89673805236818, 0.70],
                [54.99199440941322,82.88025856018068, 1]
            ];
            L.hotline(latlngs, {palette: { 0.0: 'green', 0.5: 'yellow', 1.0: 'red' }}).addTo(map8);
        });
    });
})();
