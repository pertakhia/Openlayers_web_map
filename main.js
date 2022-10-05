window.onload = init;

// function init() {

//     // Controls
//     const fullScreenControl = new ol.control.FullScreen();
//     const mousePositionControl = new ol.control.MousePosition();
//     const overViewMapControl = new ol.control.OverviewMap({
//         layers: [
//             new ol.layer.Tile({
//                 source: new ol.source.OSM()
//             })
//         ]
//     });
//     const scaleLineControl = new ol.control.ScaleLine();
//     const map = new ol.Map({
//         view: new ol.View({
//             center: [4885488.177329348,5164037.752839146],
//             zoom: 8,
//             minZoom: 2,
//             maxZoom: 18
//         }),
//         layers: [
//             new ol.layer.Tile({
//                 source: new ol.source.OSM()
//             })
//         ],
//         target: 'js-map',
//         keyboardEventTarget: document,
//         controls:  ol.control.defaults.defaults().extend([
//             fullScreenControl,
//             mousePositionControl,
//             overViewMapControl,
//             scaleLineControl
//         ])
//     });
//     const popupContainerElement = document.getElementById('popup-container');
//     const popup = new ol.Overlay({
//         element: popupContainerElement,
//         positioning: 'center-left',
//     });
//     map.addOverlay(popup);

//     map.on('click', function (event) {
//        const clickedCoordinate = event.coordinate;
//        popup.setPosition(undefined);
//        popup.setPosition(clickedCoordinate);
//        popupContainerElement.innerHTML = 'Clicked at: ' + clickedCoordinate;
//     });

//     // DragRotate Interaction
//     const dragRotateInteraction = new ol.interaction.DragRotate({
//         condition: ol.events.condition.altKeyOnly
//     });
//     map.addInteraction(dragRotateInteraction);

//     const drawInteraction = new ol.interaction.Draw({
//         type: 'Polygon',
//         freehand: true,
//     });

//     map.addInteraction(drawInteraction);

//     drawInteraction.on('drawend', function (event) {
//         let parser = new ol.format.GeoJSON();
//         let drawnFeatures = parser.writeFeaturesObject([event.feature]);
//         console.log(drawnFeatures.features[0].geometry.coordinates);
//     });
// }

function init() {
  const map = new ol.Map({
    view: new ol.View({
      center: [0, 0],
      zoom: 3,
      extent: [
        4218834.764360715, 4863270.25403115, 5418998.024475696,
        5572932.007838269,
      ],
    }),
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
        zIndex: 1,
        visible: false,
      }),
    ],
    target: "js-map",
  });

  //Base Layers 
  //Opentreet Map Standard
  const opentreetMapStandard = new ol.layer.Tile({
    source: new ol.source.OSM(),
    visible: true,
    title: "OSMStandard",
  });

  //Opentreet Map Humanitarian
  const opentreetMapHumanitarian = new ol.layer.Tile({
    source: new ol.source.OSM({
      url: "https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
    }),
    extent: [
      4218834.764360715, 4863270.25403115, 5418998.024475696,
      5572932.007838269,
    ],
    visible: false,
    title: "OSMHumanitarian",
  });

  // Bing Maps
  const bingMaps = new ol.layer.Tile({
    source: new ol.source.BingMaps({
      key: "AkIO7_Vz3poCELR3i1vLHUPe1pxT10SzGyG0ul6h3kH0SOHCeIZ6312JVb_PnA7-",
      imagerySet: "AerialWithLabels", // Options 'Aerial', 'AerialWithLabels', 'Road'
    }),
    visible: false,
    title: "BingMaps",
  });

  // CartoDB Basemap Layer
  const cartoDBBaseLayer = new ol.layer.Tile({
    source: new ol.source.XYZ({
      url: "https://{a-c}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    }),
    visible: false,
    title: "CartoDarkAll",
  });


  // TileDebug Layer
  const tileDebugLayer = new ol.layer.Tile({
    source: new ol.source.TileDebug({
      projection: "EPSG:3857",
      tileGrid: new ol.tilegrid.TileGrid({
        extent: [
          4218834.764360715, 4863270.25403115, 5418998.024475696,
          5572932.007838269,
        ],
        resolutions: [
          156543.03392804103, 78271.5169640205, 39135.75848201024,
          19567.87924100512, 9783.93962050256, 4891.96981025128,
          2445.98490512564, 1222.99245256282, 611.49622628141, 305.748113140705,
          152.8740565703525, 76.43702828517625, 38.21851414258813,
          19.109257071294063, 9.554628535647032, 4.777314267823516,
          2.388657133911758, 1.194328566955879, 0.5971642834779395,
          0.29858214173896974, 0.14929107086948487, 0.07464553543474244,
          0.03732276771737122,
        ],
        origin: [-20037508.342789244, 20037508.342789244],
      }),
    }),
    visible: false,
  });
  map.addLayer(tileDebugLayer);

  // Stamen basemap layer
  const stamenBaseLayer = new ol.layer.Tile({
    source: new ol.source.Stamen({
      layer: "watercolor",
    }),
    visible: false,
  });
  map.addLayer(stamenBaseLayer);

  // georgian basemap layer
  const layerNorv = new ol.layer.Image({
    source: new ol.source.ImageWMS({
      url: "http://mp1.napr.gov.ge/ORTHO_2016-17_NORV/service?",
      crossOrigin: "anonymous",
      params: {
        LAYERS: "ORTHO_2016-17_NORV",
        FORMAT: "image/png",
        SRS: "EPSG:900913",
        CRS: "EPSG:3857",
        EXCEPTIONS: "application/vnd.ogc.se_inimage",
        SERVICE: "WMS",
        REQUEST: "GetMap",
        VERSION: "1.3.0",
      },
      serverType: "mapserver",
    }),
    visible: false,
    title: "layerNorv",
  });
  map.addLayer(layerNorv);

  // console.log(stamenBaseLayer.getSource().getKeys());


  const baseLayersGroup = new ol.layer.Group({
    layers: [
      opentreetMapStandard,
      opentreetMapHumanitarian,
      bingMaps,
      cartoDBBaseLayer,
      stamenBaseLayer,
      layerNorv,
    ],
  });
  map.addLayer(baseLayersGroup);

  // Layer Switcher logic for BaseLayers
  const baseLayerElements = document.querySelectorAll(".sidebar > input[type=radio]");
  for (let baseLayerElement of baseLayerElements) {
    baseLayerElement.addEventListener("change", function () {
      let baseLayerElementValue = this.value;
      baseLayersGroup.getLayers().forEach(function (element, index, array) {
        let baseLayerTitle = element.get("title");
        element.setVisible(baseLayerTitle === baseLayerElementValue);
      });
    });
  }

  map.on("click", function (event) {
    console.log(event);
  });
}
