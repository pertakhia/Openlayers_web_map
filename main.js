window.onload = init;

function init() {

    // Controls
    const fullScreenControl = new ol.control.FullScreen();
    const mousePositionControl = new ol.control.MousePosition();
    const overViewMapControl = new ol.control.OverviewMap({
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ]
    });
    const scaleLineControl = new ol.control.ScaleLine();
    const map = new ol.Map({
        view: new ol.View({
            center: [4885488.177329348,5164037.752839146],
            zoom: 8,
            minZoom: 2,
            maxZoom: 18
        }),
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        target: 'js-map',
        keyboardEventTarget: document,
        controls:  ol.control.defaults.defaults().extend([
            fullScreenControl,
            mousePositionControl,
            overViewMapControl,
            scaleLineControl
        ])
    });
    const popupContainerElement = document.getElementById('popup-container');
    const popup = new ol.Overlay({
        element: popupContainerElement,
        positioning: 'center-left',
    });
    map.addOverlay(popup);

    map.on('click', function (event) {
       const clickedCoordinate = event.coordinate;
       popup.setPosition(undefined);
       popup.setPosition(clickedCoordinate);
       popupContainerElement.innerHTML = 'Clicked at: ' + clickedCoordinate;
    });

    // DragRotate Interaction
    const dragRotateInteraction = new ol.interaction.DragRotate({
        condition: ol.events.condition.altKeyOnly
    });
    map.addInteraction(dragRotateInteraction);

    const drawInteraction = new ol.interaction.Draw({
        type: 'Polygon',
        freehand: true,
    });

    map.addInteraction(drawInteraction);

    drawInteraction.on('drawend', function (event) {
        let parser = new ol.format.GeoJSON();
        let drawnFeatures = parser.writeFeaturesObject([event.feature]);
        console.log(drawnFeatures.features[0].geometry.coordinates);
    });
}
