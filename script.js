(function(){
    var script = {
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "children": [
  "this.MainViewer",
  "this.Image_BEE6FED8_AC35_2F20_41D8_34B6B91DA709",
  "this.Container_806973DA_ADB0_EB72_41E1_4BBDAAEB91FF",
  "this.Container_BC8D06B7_B143_E72C_41CA_E1C4F81682F0",
  "this.HTMLText_B3A95BF7_AD90_5B11_41E1_AC9050095132",
  "this.Container_A797E343_B17D_3EDA_41AB_2CDE4A57AE7C"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_B7480756_AD90_6B13_41A9_86B89E4AD856_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_BD225E9E_B273_D96C_41A9_C0F962709F6A].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "layout": "absolute",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "definitions": [{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_AB85AC89_B2D2_00B3_41E2_BE60779E3247",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 132.11,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_B8C14F35_B2B2_1D7C_41C0_C750BF700F56_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_A20906C8_B2B2_01EE_41D0_84C268A8BE7A",
  "this.overlay_A3672B24_B2BE_0008_41E0_C201F6A249BA"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_B80829CA_B2B2_0517_41E0_34B598FB7879_t.jpg",
   "stereoCube": {
    "levels": [
     {
      "url": "media/panorama_B80829CA_B2B2_0517_41E0_34B598FB7879_0/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 72,
      "width": 36864,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B80829CA_B2B2_0517_41E0_34B598FB7879_0/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "width": 18432,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B80829CA_B2B2_0517_41E0_34B598FB7879_0/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "width": 12288,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B80829CA_B2B2_0517_41E0_34B598FB7879_0/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "HE office 360 view 4",
 "hfovMin": "120%",
 "id": "panorama_B80829CA_B2B2_0517_41E0_34B598FB7879",
 "thumbnailUrl": "media/panorama_B80829CA_B2B2_0517_41E0_34B598FB7879_t.jpg",
 "hfovMax": 130,
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B96641C0_B2B2_0513_41E1_3C641E81CE7B"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -10.96,
   "distance": 1,
   "backwardYaw": -47.89,
   "panorama": "this.panorama_B8C14F35_B2B2_1D7C_41C0_C750BF700F56"
  }
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_BD919C43_B2B6_02F2_41E2_5EA58346F8A1",
  "this.overlay_BDF455A0_B2B6_026E_41C2_EECDEDD547D2"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_B96641C0_B2B2_0513_41E1_3C641E81CE7B_t.jpg",
   "stereoCube": {
    "levels": [
     {
      "url": "media/panorama_B96641C0_B2B2_0513_41E1_3C641E81CE7B_0/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 72,
      "width": 36864,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B96641C0_B2B2_0513_41E1_3C641E81CE7B_0/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "width": 18432,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B96641C0_B2B2_0513_41E1_3C641E81CE7B_0/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "width": 12288,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B96641C0_B2B2_0513_41E1_3C641E81CE7B_0/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "HE office 360 view 1",
 "hfovMin": "120%",
 "id": "panorama_B96641C0_B2B2_0513_41E1_3C641E81CE7B",
 "thumbnailUrl": "media/panorama_B96641C0_B2B2_0513_41E1_3C641E81CE7B_t.jpg",
 "hfovMax": 130,
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -37.84,
   "distance": 1,
   "backwardYaw": 22.95,
   "panorama": "this.panorama_B8021C47_B2B2_031D_41A1_FB58FB9C9991"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 47.57,
   "distance": 1,
   "backwardYaw": -110.2,
   "panorama": "this.panorama_B8C14F35_B2B2_1D7C_41C0_C750BF700F56"
  }
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B96641C0_B2B2_0513_41E1_3C641E81CE7B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B96641C0_B2B2_0513_41E1_3C641E81CE7B_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B8C14F35_B2B2_1D7C_41C0_C750BF700F56",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B8C14F35_B2B2_1D7C_41C0_C750BF700F56_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B8021C47_B2B2_031D_41A1_FB58FB9C9991",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B8021C47_B2B2_031D_41A1_FB58FB9C9991_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_B80829CA_B2B2_0517_41E0_34B598FB7879",
   "camera": "this.panorama_B80829CA_B2B2_0517_41E0_34B598FB7879_camera"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_ABF29C78_B2D2_0050_41C4_11634620F597",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -157.05,
  "pitch": 0
 }
},
{
 "class": "SlideOutEffect",
 "duration": 0,
 "id": "effect_2745FDF7_ACED_1161_41D1_B5EC4D857875",
 "easing": "linear",
 "to": "right"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_B80829CA_B2B2_0517_41E0_34B598FB7879_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_BDBEAB06_B2B6_061E_41BA_4A4F5EF2D777",
  "this.overlay_BD1EE1A9_B2B6_0236_4198_3AF80FA42F89"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_B8C14F35_B2B2_1D7C_41C0_C750BF700F56_t.jpg",
   "stereoCube": {
    "levels": [
     {
      "url": "media/panorama_B8C14F35_B2B2_1D7C_41C0_C750BF700F56_0/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 72,
      "width": 36864,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B8C14F35_B2B2_1D7C_41C0_C750BF700F56_0/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "width": 18432,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B8C14F35_B2B2_1D7C_41C0_C750BF700F56_0/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "width": 12288,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8C14F35_B2B2_1D7C_41C0_C750BF700F56_0/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "HE office 360 view 2",
 "hfovMin": "120%",
 "id": "panorama_B8C14F35_B2B2_1D7C_41C0_C750BF700F56",
 "thumbnailUrl": "media/panorama_B8C14F35_B2B2_1D7C_41C0_C750BF700F56_t.jpg",
 "hfovMax": 130,
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -47.89,
   "distance": 1,
   "backwardYaw": -10.96,
   "panorama": "this.panorama_B80829CA_B2B2_0517_41E0_34B598FB7879"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -110.2,
   "distance": 1,
   "backwardYaw": 47.57,
   "panorama": "this.panorama_B96641C0_B2B2_0513_41E1_3C641E81CE7B"
  }
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_B96641C0_B2B2_0513_41E1_3C641E81CE7B_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B96641C0_B2B2_0513_41E1_3C641E81CE7B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B7480756_AD90_6B13_41A9_86B89E4AD856_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B96641C0_B2B2_0513_41E1_3C641E81CE7B_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B8C14F35_B2B2_1D7C_41C0_C750BF700F56",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B7480756_AD90_6B13_41A9_86B89E4AD856_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B8C14F35_B2B2_1D7C_41C0_C750BF700F56_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B8021C47_B2B2_031D_41A1_FB58FB9C9991",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B7480756_AD90_6B13_41A9_86B89E4AD856_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B8021C47_B2B2_031D_41A1_FB58FB9C9991_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B80829CA_B2B2_0517_41E0_34B598FB7879",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B7480756_AD90_6B13_41A9_86B89E4AD856_playlist, 3, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B80829CA_B2B2_0517_41E0_34B598FB7879_camera"
  }
 ],
 "id": "ThumbnailList_B7480756_AD90_6B13_41A9_86B89E4AD856_playlist"
},
{
 "class": "SlideInEffect",
 "duration": 0,
 "id": "effect_CCD93AA4_AC7D_17DF_41BE_9DB7786D337B",
 "easing": "linear",
 "from": "right"
},
{
 "buttonMoveUp": "this.IconButton_A7975343_B17D_3EDA_41BF_8955CDC2EDAB",
 "class": "PanoramaPlayer",
 "buttonPause": "this.IconButton_A7974343_B17D_3EDA_41D5_38B6E5F68E61",
 "buttonMoveDown": "this.IconButton_A797B343_B17D_3EDA_41CA_0171986F3D96",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "buttonMoveLeft": "this.IconButton_A7970343_B17D_3EDA_41DF_8CEDA653A935",
 "buttonZoomIn": "this.IconButton_A797F343_B17D_3EDA_41E1_5446CB5EC525",
 "buttonPlayRight": "this.IconButton_A7979343_B17D_3EDA_41BB_92702E290118",
 "mouseControlMode": "drag_acceleration",
 "id": "MainViewerPanoramaPlayer",
 "buttonZoomOut": "this.IconButton_A7973343_B17D_3EDA_41E5_A3FC6227C5CE",
 "buttonPlayLeft": "this.IconButton_A7971343_B17D_3EDA_41E1_D4B648D50BFF",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonMoveRight": "this.IconButton_A797A343_B17D_3EDA_41B1_10FF9F1B46EE",
 "touchControlMode": "drag_rotation"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_ABE74C6F_B2D2_0070_41E4_093BB0404B02",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -132.43,
  "pitch": 0
 }
},
{
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_A2CEBA1C_B2B2_00C3_41D8_E4F47ADB3C48",
  "this.overlay_A32F7676_B2B2_017B_41C9_C0990CA5B8A9"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_B8021C47_B2B2_031D_41A1_FB58FB9C9991_t.jpg",
   "stereoCube": {
    "levels": [
     {
      "url": "media/panorama_B8021C47_B2B2_031D_41A1_FB58FB9C9991_0/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 72,
      "width": 36864,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B8021C47_B2B2_031D_41A1_FB58FB9C9991_0/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "width": 18432,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B8021C47_B2B2_031D_41A1_FB58FB9C9991_0/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "width": 12288,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8021C47_B2B2_031D_41A1_FB58FB9C9991_0/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "HE office 360 view 3",
 "hfovMin": "120%",
 "id": "panorama_B8021C47_B2B2_031D_41A1_FB58FB9C9991",
 "thumbnailUrl": "media/panorama_B8021C47_B2B2_031D_41A1_FB58FB9C9991_t.jpg",
 "hfovMax": 130,
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 22.95,
   "distance": 1,
   "backwardYaw": -37.84,
   "panorama": "this.panorama_B96641C0_B2B2_0513_41E1_3C641E81CE7B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8C14F35_B2B2_1D7C_41C0_C750BF700F56"
  }
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_AB91FC91_B2D2_00D3_41D5_BD7EB49DB807",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 142.16,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_ABDC7C65_B2D2_0070_41E5_C9360309CA7F",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 169.04,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_ABFEEC80_B2D2_00B1_41BA_BAF9B9CEA74C",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 69.8,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_B8021C47_B2B2_031D_41A1_FB58FB9C9991_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "SlideInEffect",
 "duration": 0,
 "id": "effect_2745EDF7_ACED_1161_41CE_8D7449621D35",
 "easing": "linear",
 "from": "right"
},
{
 "class": "SlideOutEffect",
 "duration": 0,
 "id": "effect_CCD9DAA4_AC7D_17DF_41E2_64CF35750EE8",
 "easing": "linear",
 "to": "right"
},
{
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "id": "MainViewer",
 "progressBarBorderSize": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "width": "100%",
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarBorderRadius": 0,
 "minHeight": 50,
 "toolTipShadowOpacity": 1,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "transitionDuration": 0,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "toolTipFontFamily": "Arial",
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "borderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "class": "ViewerArea",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "progressRight": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "shadow": false,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "playbackBarHeadOpacity": 1,
 "paddingTop": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#000000",
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "0.6vw",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColorDirection": "vertical",
 "data": {
  "name": "Main Viewer"
 },
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6
},
{
 "maxHeight": 85,
 "maxWidth": 214,
 "id": "Image_BEE6FED8_AC35_2F20_41D8_34B6B91DA709",
 "left": "3%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": "90%",
 "url": "skin/Image_BEE6FED8_AC35_2F20_41D8_34B6B91DA709.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "top": "90.97%",
 "bottom": "4%",
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "click": "if(!this.Container_BC8D06B7_B143_E72C_41CA_E1C4F81682F0.get('visible')){ this.setComponentVisibility(this.Container_BC8D06B7_B143_E72C_41CA_E1C4F81682F0, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_BC8D06B7_B143_E72C_41CA_E1C4F81682F0, false, 0, null, null, false) }",
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "CMED"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "children": [
  "this.Container_F59EA3FC_AC15_152A_41D3_A68AE3523ABE",
  "this.Container_8F88A174_B17F_DAF3_41E3_9385916D5A3E",
  "this.Container_8E56560D_B147_6613_41E3_B9F30B1AF2C2"
 ],
 "id": "Container_806973DA_ADB0_EB72_41E1_4BBDAAEB91FF",
 "left": "79.38%",
 "right": "1.2%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "paddingLeft": 0,
 "propagateClick": false,
 "minWidth": 1,
 "height": "100%",
 "top": "0%",
 "gap": 10,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "Right Side Container"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.ThumbnailList_B7480756_AD90_6B13_41A9_86B89E4AD856"
 ],
 "id": "Container_BC8D06B7_B143_E72C_41CA_E1C4F81682F0",
 "left": "0%",
 "right": "84.23%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "bottom": "0%",
 "propagateClick": false,
 "minWidth": 1,
 "top": "0%",
 "gap": 10,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "Left Side Container"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_B3A95BF7_AD90_5B11_41E1_AC9050095132",
 "left": "0.05%",
 "right": "49.95%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 20,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 20,
 "bottom": "87.72%",
 "propagateClick": false,
 "minWidth": 1,
 "top": "0%",
 "borderSize": 0,
 "paddingTop": 20,
 "paddingBottom": 20,
 "class": "HTMLText",
 "data": {
  "name": "HTMLText53815"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vw;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:2.41vw;\"><B>GDT</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vw;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#003366;font-size:1.69vw;\"><B><I>H.E Room</I></B></SPAN></SPAN></DIV></div>",
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_A797E343_B17D_3EDA_41AB_2CDE4A57AE7C",
 "left": "40%",
 "children": [
  "this.IconButton_A7973343_B17D_3EDA_41E5_A3FC6227C5CE",
  "this.IconButton_A7971343_B17D_3EDA_41E1_D4B648D50BFF",
  "this.IconButton_A7970343_B17D_3EDA_41DF_8CEDA653A935",
  "this.Container_A7977343_B17D_3EDA_41C0_F47328C07981",
  "this.IconButton_A797A343_B17D_3EDA_41B1_10FF9F1B46EE",
  "this.IconButton_A7979343_B17D_3EDA_41BB_92702E290118",
  "this.IconButton_BD225E9E_B273_D96C_41A9_C0F962709F6A",
  "this.IconButton_A797F343_B17D_3EDA_41E1_5446CB5EC525"
 ],
 "right": "38.77%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "overflow": "hidden",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "bottom": "0%",
 "propagateClick": false,
 "minWidth": 20,
 "top": "85.03%",
 "gap": 4,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "Middle Control"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 128,
 "maxWidth": 128,
 "id": "IconButton_BD225E9E_B273_D96C_41A9_C0F962709F6A",
 "toolTipPaddingRight": 6,
 "width": 54,
 "toolTipFontWeight": "normal",
 "toolTipBorderSize": 1,
 "toolTipShadowColor": "#333333",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "toolTipBorderRadius": 3,
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "toolTip": "Fullscreen",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_BD225E9E_B273_D96C_41A9_C0F962709F6A_rollover.png",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "toolTipFontFamily": "Arial",
 "height": 38,
 "mode": "toggle",
 "borderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "toolTipBorderColor": "#767676",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "class": "IconButton",
 "toolTipFontSize": 12,
 "toolTipPaddingBottom": 4,
 "toolTipFontColor": "#606060",
 "toolTipShadowSpread": 0,
 "data": {
  "name": "IconButton1493"
 },
 "toolTipTextShadowBlurRadius": 3,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_BD225E9E_B273_D96C_41A9_C0F962709F6A.png",
 "pressedIconURL": "skin/IconButton_BD225E9E_B273_D96C_41A9_C0F962709F6A_pressed.png",
 "shadow": false,
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 41.29,
   "hfov": 17.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_B80829CA_B2B2_0517_41E0_34B598FB7879_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.02
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_A06B9FA7_B2BE_00C0_41DA_FCD99DB68750",
   "pitch": -17.02,
   "yaw": 41.29,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.71,
   "distance": 100
  }
 ],
 "id": "overlay_A20906C8_B2B2_01EE_41D0_84C268A8BE7A",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B8C14F35_B2B2_1D7C_41C0_C750BF700F56, this.camera_AB85AC89_B2D2_00B3_41E2_BE60779E3247); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.96,
   "hfov": 17.63,
   "image": {
    "levels": [
     {
      "url": "media/panorama_B80829CA_B2B2_0517_41E0_34B598FB7879_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.77
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_A06B5FA7_B2BE_00C0_41E2_D722E2559CDE",
   "pitch": -17.77,
   "yaw": -10.96,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.63,
   "distance": 100
  }
 ],
 "id": "overlay_A3672B24_B2BE_0008_41E0_C201F6A249BA",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B8C14F35_B2B2_1D7C_41C0_C750BF700F56, this.camera_ABFEEC80_B2D2_00B1_41BA_BAF9B9CEA74C); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 47.57,
   "hfov": 17.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_B96641C0_B2B2_0513_41E1_3C641E81CE7B_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.53
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_A0C62F09_B2B6_1FE3_41D5_12E341A06A79",
   "pitch": -18.53,
   "yaw": 47.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.56,
   "distance": 100
  }
 ],
 "id": "overlay_BD919C43_B2B6_02F2_41E2_5EA58346F8A1",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B8021C47_B2B2_031D_41A1_FB58FB9C9991, this.camera_ABF29C78_B2D2_0050_41C4_11634620F597); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -37.84,
   "hfov": 17.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_B96641C0_B2B2_0513_41E1_3C641E81CE7B_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.78
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_A0C1AF0A_B2B6_1FE1_41B9_555541C78FC9",
   "pitch": -18.78,
   "yaw": -37.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.53,
   "distance": 100
  }
 ],
 "id": "overlay_BDF455A0_B2B6_026E_41C2_EECDEDD547D2",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B96641C0_B2B2_0513_41E1_3C641E81CE7B, this.camera_ABE74C6F_B2D2_0070_41E4_093BB0404B02); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -110.2,
   "hfov": 16.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8C14F35_B2B2_1D7C_41C0_C750BF700F56_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.55
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_A0C1FF0A_B2B6_1FE1_41DD_2AD4C951CAC6",
   "pitch": -23.55,
   "yaw": -110.2,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.98,
   "distance": 100
  }
 ],
 "id": "overlay_BDBEAB06_B2B6_061E_41BA_4A4F5EF2D777",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B80829CA_B2B2_0517_41E0_34B598FB7879, this.camera_ABDC7C65_B2D2_0070_41E5_C9360309CA7F); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -47.89,
   "hfov": 17.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8C14F35_B2B2_1D7C_41C0_C750BF700F56_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.78
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_A0C12F0A_B2B6_1FE1_41AF_F7A2B2F743B1",
   "pitch": -18.78,
   "yaw": -47.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.53,
   "distance": 100
  }
 ],
 "id": "overlay_BD1EE1A9_B2B6_0236_4198_3AF80FA42F89",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "id": "IconButton_A7975343_B17D_3EDA_41BF_8955CDC2EDAB",
 "width": "80%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_A7975343_B17D_3EDA_41BF_8955CDC2EDAB_rollover.png",
 "paddingLeft": 0,
 "minWidth": 0,
 "propagateClick": false,
 "mode": "push",
 "borderSize": 0,
 "height": "23.36%",
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "class": "IconButton",
 "data": {
  "name": "Button27667"
 },
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_A7975343_B17D_3EDA_41BF_8955CDC2EDAB.png",
 "pressedIconURL": "skin/IconButton_A7975343_B17D_3EDA_41BF_8955CDC2EDAB_pressed.png",
 "shadow": false,
 "cursor": "hand"
},
{
 "id": "IconButton_A7974343_B17D_3EDA_41D5_38B6E5F68E61",
 "width": "100%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_A7974343_B17D_3EDA_41D5_38B6E5F68E61_rollover.png",
 "paddingLeft": 0,
 "minWidth": 0,
 "propagateClick": false,
 "mode": "toggle",
 "borderSize": 0,
 "height": "29.2%",
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "class": "IconButton",
 "data": {
  "name": "Button27668"
 },
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_A7974343_B17D_3EDA_41D5_38B6E5F68E61.png",
 "pressedIconURL": "skin/IconButton_A7974343_B17D_3EDA_41D5_38B6E5F68E61_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_A7974343_B17D_3EDA_41D5_38B6E5F68E61_pressed_rollover.png"
},
{
 "id": "IconButton_A797B343_B17D_3EDA_41CA_0171986F3D96",
 "width": "80%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_A797B343_B17D_3EDA_41CA_0171986F3D96_rollover.png",
 "paddingLeft": 0,
 "minWidth": 0,
 "propagateClick": false,
 "mode": "push",
 "borderSize": 0,
 "height": "23.36%",
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "class": "IconButton",
 "data": {
  "name": "Button27669"
 },
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_A797B343_B17D_3EDA_41CA_0171986F3D96.png",
 "pressedIconURL": "skin/IconButton_A797B343_B17D_3EDA_41CA_0171986F3D96_pressed.png",
 "shadow": false,
 "cursor": "hand"
},
{
 "id": "IconButton_A7970343_B17D_3EDA_41DF_8CEDA653A935",
 "width": "8.99%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_A7970343_B17D_3EDA_41DF_8CEDA653A935_rollover.png",
 "paddingLeft": 0,
 "minWidth": 0,
 "propagateClick": false,
 "mode": "push",
 "borderSize": 0,
 "height": "23.36%",
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "class": "IconButton",
 "data": {
  "name": "Button27665"
 },
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_A7970343_B17D_3EDA_41DF_8CEDA653A935.png",
 "pressedIconURL": "skin/IconButton_A7970343_B17D_3EDA_41DF_8CEDA653A935_pressed.png",
 "shadow": false,
 "cursor": "hand"
},
{
 "id": "IconButton_A797F343_B17D_3EDA_41E1_5446CB5EC525",
 "width": "8.91%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_A797F343_B17D_3EDA_41E1_5446CB5EC525_rollover.png",
 "paddingLeft": 0,
 "minWidth": 0,
 "propagateClick": false,
 "mode": "push",
 "borderSize": 0,
 "height": "23.36%",
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "class": "IconButton",
 "data": {
  "name": "Button27673"
 },
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_A797F343_B17D_3EDA_41E1_5446CB5EC525.png",
 "pressedIconURL": "skin/IconButton_A797F343_B17D_3EDA_41E1_5446CB5EC525_pressed.png",
 "shadow": false,
 "cursor": "hand"
},
{
 "id": "IconButton_A7979343_B17D_3EDA_41BB_92702E290118",
 "width": "11.17%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_A7979343_B17D_3EDA_41BB_92702E290118_rollover.png",
 "paddingLeft": 0,
 "minWidth": 0,
 "propagateClick": false,
 "mode": "push",
 "borderSize": 0,
 "height": "29.2%",
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "class": "IconButton",
 "data": {
  "name": "Button27671"
 },
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_A7979343_B17D_3EDA_41BB_92702E290118.png",
 "pressedIconURL": "skin/IconButton_A7979343_B17D_3EDA_41BB_92702E290118_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_A7979343_B17D_3EDA_41BB_92702E290118_pressed_rollover.png"
},
{
 "id": "IconButton_A7973343_B17D_3EDA_41E5_A3FC6227C5CE",
 "width": "9.07%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_A7973343_B17D_3EDA_41E5_A3FC6227C5CE_rollover.png",
 "paddingLeft": 0,
 "minWidth": 0,
 "propagateClick": false,
 "mode": "push",
 "borderSize": 0,
 "height": "23.36%",
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "class": "IconButton",
 "data": {
  "name": "Button27662"
 },
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_A7973343_B17D_3EDA_41E5_A3FC6227C5CE.png",
 "pressedIconURL": "skin/IconButton_A7973343_B17D_3EDA_41E5_A3FC6227C5CE_pressed.png",
 "shadow": false,
 "cursor": "hand"
},
{
 "id": "IconButton_A7971343_B17D_3EDA_41E1_D4B648D50BFF",
 "width": "11.27%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_A7971343_B17D_3EDA_41E1_D4B648D50BFF_rollover.png",
 "paddingLeft": 0,
 "minWidth": 0,
 "propagateClick": false,
 "mode": "push",
 "borderSize": 0,
 "height": "29.2%",
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "class": "IconButton",
 "data": {
  "name": "Button27664"
 },
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_A7971343_B17D_3EDA_41E1_D4B648D50BFF.png",
 "pressedIconURL": "skin/IconButton_A7971343_B17D_3EDA_41E1_D4B648D50BFF_pressed.png",
 "shadow": false,
 "cursor": "hand"
},
{
 "id": "IconButton_A797A343_B17D_3EDA_41B1_10FF9F1B46EE",
 "width": "8.96%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_A797A343_B17D_3EDA_41B1_10FF9F1B46EE_rollover.png",
 "paddingLeft": 0,
 "minWidth": 0,
 "propagateClick": false,
 "mode": "push",
 "borderSize": 0,
 "height": "23.36%",
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "class": "IconButton",
 "data": {
  "name": "Button27670"
 },
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_A797A343_B17D_3EDA_41B1_10FF9F1B46EE.png",
 "pressedIconURL": "skin/IconButton_A797A343_B17D_3EDA_41B1_10FF9F1B46EE_pressed.png",
 "shadow": false,
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B96641C0_B2B2_0513_41E1_3C641E81CE7B, this.camera_AB91FC91_B2D2_00D3_41D5_BD7EB49DB807); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 22.95,
   "hfov": 17.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8021C47_B2B2_031D_41A1_FB58FB9C9991_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.05
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_A06A2FA7_B2BE_00C0_4172_8FC548FD6631",
   "pitch": -23.05,
   "yaw": 22.95,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.04,
   "distance": 100
  }
 ],
 "id": "overlay_A2CEBA1C_B2B2_00C3_41D8_E4F47ADB3C48",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -36.84,
   "hfov": 17.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_B8021C47_B2B2_031D_41A1_FB58FB9C9991_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.51
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_A06BCFA7_B2BE_00C0_41B7_B7C2B1C7F6B8",
   "pitch": -14.51,
   "yaw": -36.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.93,
   "distance": 100
  }
 ],
 "id": "overlay_A32F7676_B2B2_017B_41C9_C0990CA5B8A9",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "children": [
  "this.ViewerAreaLabeled_86CAAB5A_AC15_150D_41E5_8B8BF4BD3480"
 ],
 "id": "Container_F59EA3FC_AC15_152A_41D3_A68AE3523ABE",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "layout": "vertical",
 "verticalAlign": "middle",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 50,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minWidth": 1,
 "propagateClick": false,
 "borderColor": "#000000",
 "borderSize": 2,
 "height": "69.727%",
 "paddingBottom": 0,
 "gap": 5,
 "paddingTop": 0,
 "contentOpaque": true,
 "class": "Container",
 "data": {
  "name": "Floor Plan Container"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_26D3DDC5_AC15_11AC_41E2_6BB5E3BD07D9"
 ],
 "id": "Container_8F88A174_B17F_DAF3_41E3_9385916D5A3E",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "layout": "vertical",
 "verticalAlign": "middle",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minWidth": 1,
 "propagateClick": false,
 "gap": 10,
 "borderSize": 0,
 "height": "19.78%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "Middle"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_8886944C_AC33_7318_41AB_EB089F4691B5"
 ],
 "id": "Container_8E56560D_B147_6613_41E3_B9F30B1AF2C2",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "layout": "vertical",
 "verticalAlign": "middle",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minWidth": 1,
 "propagateClick": false,
 "gap": 10,
 "borderSize": 0,
 "height": "5.25%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "Bottom"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "id": "ThumbnailList_B7480756_AD90_6B13_41A9_86B89E4AD856",
 "left": "10%",
 "itemBorderRadius": 0,
 "rollOverItemLabelFontSize": "0.78vw",
 "itemVerticalAlign": "middle",
 "right": "25%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "itemPaddingLeft": 3,
 "verticalAlign": "top",
 "paddingLeft": 20,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "itemThumbnailShadowSpread": 1,
 "itemOpacity": 1,
 "propagateClick": false,
 "minWidth": 20,
 "playList": "this.ThumbnailList_B7480756_AD90_6B13_41A9_86B89E4AD856_playlist",
 "itemThumbnailOpacity": 1,
 "borderSize": 0,
 "itemBackgroundColor": [],
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "itemPaddingRight": 3,
 "rollOverItemLabelFontWeight": "normal",
 "rollOverItemBackgroundOpacity": 0,
 "class": "ThumbnailList",
 "scrollBarColor": "#FFFFFF",
 "selectedItemLabelFontSize": "0.72vw",
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "itemThumbnailShadowOpacity": 0.54,
 "selectedItemLabelFontColor": "#FFCC00",
 "itemLabelFontWeight": "normal",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "itemThumbnailShadowBlurRadius": 8,
 "itemThumbnailScaleMode": "fit_outside",
 "itemThumbnailHeight": 60,
 "itemLabelGap": 9,
 "itemLabelFontSize": "0.84vw",
 "paddingRight": 20,
 "itemThumbnailShadowVerticalLength": 3,
 "itemThumbnailShadow": true,
 "itemThumbnailShadowHorizontalLength": 3,
 "itemLabelFontColor": "#FFFFFF",
 "borderRadius": 5,
 "layout": "vertical",
 "top": "12%",
 "bottom": "10%",
 "itemBackgroundColorDirection": "vertical",
 "gap": 5,
 "itemHorizontalAlign": "center",
 "itemPaddingBottom": 3,
 "paddingTop": 10,
 "paddingBottom": 10,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "itemThumbnailShadowColor": "#000000",
 "itemMode": "normal",
 "data": {
  "name": "ThumbnailList35762"
 },
 "horizontalAlign": "left",
 "itemLabelPosition": "bottom",
 "itemLabelFontFamily": "Arial",
 "itemThumbnailBorderRadius": 50
},
{
 "children": [
  "this.IconButton_A7975343_B17D_3EDA_41BF_8955CDC2EDAB",
  "this.IconButton_A7974343_B17D_3EDA_41D5_38B6E5F68E61",
  "this.IconButton_A797B343_B17D_3EDA_41CA_0171986F3D96"
 ],
 "id": "Container_A7977343_B17D_3EDA_41C0_F47328C07981",
 "width": "11.36%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "hidden",
 "layout": "vertical",
 "verticalAlign": "middle",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minWidth": 20,
 "propagateClick": false,
 "gap": 4,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "Container27666"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B80829CA_B2B2_0517_41E0_34B598FB7879_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_A06B9FA7_B2BE_00C0_41DA_FCD99DB68750",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B80829CA_B2B2_0517_41E0_34B598FB7879_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_A06B5FA7_B2BE_00C0_41E2_D722E2559CDE",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B96641C0_B2B2_0513_41E1_3C641E81CE7B_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_A0C62F09_B2B6_1FE3_41D5_12E341A06A79",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B96641C0_B2B2_0513_41E1_3C641E81CE7B_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_A0C1AF0A_B2B6_1FE1_41B9_555541C78FC9",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8C14F35_B2B2_1D7C_41C0_C750BF700F56_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_A0C1FF0A_B2B6_1FE1_41DD_2AD4C951CAC6",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8C14F35_B2B2_1D7C_41C0_C750BF700F56_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_A0C12F0A_B2B6_1FE1_41AF_F7A2B2F743B1",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8021C47_B2B2_031D_41A1_FB58FB9C9991_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_A06A2FA7_B2BE_00C0_4172_8FC548FD6631",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8021C47_B2B2_031D_41A1_FB58FB9C9991_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_A06BCFA7_B2BE_00C0_41B7_B7C2B1C7F6B8",
 "frameCount": 24
},
{
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "id": "ViewerAreaLabeled_86CAAB5A_AC15_150D_41E5_8B8BF4BD3480",
 "progressBarBorderSize": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "width": "100%",
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarBorderRadius": 0,
 "minHeight": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "toolTipFontFamily": "Arial",
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "borderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "class": "ViewerArea",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "progressRight": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "shadow": false,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "progressBarBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "paddingTop": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#000000",
 "click": "if(!this.ViewerAreaLabeled_86CAAB5A_AC15_150D_41E5_8B8BF4BD3480.get('visible')){ this.setComponentVisibility(this.ViewerAreaLabeled_86CAAB5A_AC15_150D_41E5_8B8BF4BD3480, true, 0, null, null, false) } else { this.setComponentVisibility(this.ViewerAreaLabeled_86CAAB5A_AC15_150D_41E5_8B8BF4BD3480, false, 0, null, null, false) }",
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "0.6vw",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColorDirection": "vertical",
 "data": {
  "name": "Floor Plan Viewer"
 },
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "visible": false,
 "playbackBarHeadWidth": 6
},
{
 "children": [
  "this.IconButton_217F3EB5_ACF5_33E4_41E2_608DADB8CC7E",
  "this.Container_23BF7E02_AC1D_72AA_41DA_22E1695AF185"
 ],
 "id": "Container_26D3DDC5_AC15_11AC_41E2_6BB5E3BD07D9",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "layout": "horizontal",
 "verticalAlign": "middle",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minWidth": 1,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "gap": 3,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "Contact Us Compo"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_91D696C6_B1C5_2631_41D0_5016C4C73829",
  "this.Button_B5551DB1_A8AE_1192_41E0_9815EC3E8FD9",
  "this.Button_BAFF9AB7_AC6D_3778_41DD_EF9D1C21D15E"
 ],
 "id": "Container_8886944C_AC33_7318_41AB_EB089F4691B5",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "layout": "horizontal",
 "verticalAlign": "middle",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minWidth": 1,
 "propagateClick": false,
 "gap": 5,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "Button CU and FP"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "center",
 "scrollBarOpacity": 0
},
{
 "maxHeight": 616,
 "maxWidth": 900,
 "id": "IconButton_217F3EB5_ACF5_33E4_41E2_608DADB8CC7E",
 "width": "81.529%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_217F3EB5_ACF5_33E4_41E2_608DADB8CC7E_rollover.png",
 "propagateClick": false,
 "minWidth": 1,
 "height": "100%",
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "if(!this.Container_26D3DDC5_AC15_11AC_41E2_6BB5E3BD07D9.get('visible')){ this.setComponentVisibility(this.Container_26D3DDC5_AC15_11AC_41E2_6BB5E3BD07D9, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_26D3DDC5_AC15_11AC_41E2_6BB5E3BD07D9, false, 0, null, null, false) }",
 "class": "IconButton",
 "data": {
  "name": "Contact"
 },
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_217F3EB5_ACF5_33E4_41E2_608DADB8CC7E.png",
 "pressedIconURL": "skin/IconButton_217F3EB5_ACF5_33E4_41E2_608DADB8CC7E_pressed.png",
 "shadow": false,
 "cursor": "hand"
},
{
 "children": [
  "this.IconButton_D5B1805E_AC13_0F42_41D2_CC3FD0439B48",
  "this.IconButton_D64C3B69_AC13_714E_41C2_32E6C6ABE2F2",
  "this.IconButton_DEE538D8_AC15_3F47_41B7_DF462598A300"
 ],
 "id": "Container_23BF7E02_AC1D_72AA_41DA_22E1695AF185",
 "width": "20%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "layout": "vertical",
 "verticalAlign": "middle",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minWidth": 1,
 "propagateClick": false,
 "gap": 12,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "Left Contact Us"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "id": "IconButton_91D696C6_B1C5_2631_41D0_5016C4C73829",
 "width": "13%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_91D696C6_B1C5_2631_41D0_5016C4C73829_rollover.png",
 "paddingLeft": 0,
 "minWidth": 0,
 "propagateClick": false,
 "mode": "push",
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "if(!this.Container_BC8D06B7_B143_E72C_41CA_E1C4F81682F0.get('visible')){ this.setComponentVisibility(this.Container_BC8D06B7_B143_E72C_41CA_E1C4F81682F0, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_BC8D06B7_B143_E72C_41CA_E1C4F81682F0, false, 0, null, null, false) }",
 "class": "IconButton",
 "data": {
  "name": "Button27669"
 },
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_91D696C6_B1C5_2631_41D0_5016C4C73829.png",
 "pressedIconURL": "skin/IconButton_91D696C6_B1C5_2631_41D0_5016C4C73829_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_91D696C6_B1C5_2631_41D0_5016C4C73829_pressed_rollover.png"
},
{
 "fontFamily": "Montserrat",
 "pressedFontSize": "1vw",
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_B5551DB1_A8AE_1192_41E0_9815EC3E8FD9",
 "rollOverBackgroundOpacity": 0.8,
 "rollOverBackgroundColor": [
  "#003366"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0.15,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 0,
 "width": "44.1%",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "minHeight": 1,
 "shadowBlurRadius": 15,
 "layout": "horizontal",
 "borderRadius": 5,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "borderColor": "#FFFFFF",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "borderSize": 2,
 "height": "85.65%",
 "paddingBottom": 0,
 "label": "CONTACT US",
 "shadowColor": "#000000",
 "pressedRollOverBackgroundColor": [
  "#003366"
 ],
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#003366"
 ],
 "gap": 15,
 "class": "Button",
 "fontSize": "1vw",
 "click": "if(!this.Container_26D3DDC5_AC15_11AC_41E2_6BB5E3BD07D9.get('visible')){ this.setComponentVisibility(this.Container_26D3DDC5_AC15_11AC_41E2_6BB5E3BD07D9, true, 0, this.effect_2745EDF7_ACED_1161_41CE_8D7449621D35, 'showEffect', false) } else { this.setComponentVisibility(this.Container_26D3DDC5_AC15_11AC_41E2_6BB5E3BD07D9, false, 0, this.effect_2745FDF7_ACED_1161_41D1_B5EC4D857875, 'hideEffect', false) }",
 "rollOverShadow": false,
 "iconWidth": 0,
 "fontStyle": "normal",
 "shadow": false,
 "horizontalAlign": "center",
 "fontWeight": "bold",
 "backgroundColorDirection": "vertical",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button Contact Info info"
 }
},
{
 "fontFamily": "Montserrat",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_BAFF9AB7_AC6D_3778_41DD_EF9D1C21D15E",
 "pressedRollOverFontSize": "1vw",
 "width": "44.1%",
 "rollOverBackgroundColor": [
  "#003366"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0.15,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 0,
 "layout": "horizontal",
 "paddingLeft": 0,
 "minHeight": 1,
 "shadowBlurRadius": 15,
 "borderRadius": 5,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "borderColor": "#FFFFFF",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "borderSize": 2,
 "height": "85.65%",
 "paddingBottom": 0,
 "label": "FLOOR PLAN",
 "shadowColor": "#000000",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#003366"
 ],
 "gap": 5,
 "class": "Button",
 "fontSize": "1vw",
 "click": "if(!this.ViewerAreaLabeled_86CAAB5A_AC15_150D_41E5_8B8BF4BD3480.get('visible')){ this.setComponentVisibility(this.ViewerAreaLabeled_86CAAB5A_AC15_150D_41E5_8B8BF4BD3480, true, 0, this.effect_CCD93AA4_AC7D_17DF_41BE_9DB7786D337B, 'showEffect', false) } else { this.setComponentVisibility(this.ViewerAreaLabeled_86CAAB5A_AC15_150D_41E5_8B8BF4BD3480, false, 0, this.effect_CCD9DAA4_AC7D_17DF_41E2_64CF35750EE8, 'hideEffect', false) }",
 "rollOverShadow": false,
 "iconWidth": 0,
 "fontStyle": "normal",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Button Floor Plan"
 },
 "fontWeight": "bold",
 "backgroundColorDirection": "vertical",
 "visible": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_D5B1805E_AC13_0F42_41D2_CC3FD0439B48",
 "width": "100%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_D5B1805E_AC13_0F42_41D2_CC3FD0439B48_rollover.png",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "mode": "push",
 "borderSize": 0,
 "height": "25%",
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "class": "IconButton",
 "data": {
  "name": "Website"
 },
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_D5B1805E_AC13_0F42_41D2_CC3FD0439B48.png",
 "pressedIconURL": "skin/IconButton_D5B1805E_AC13_0F42_41D2_CC3FD0439B48_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_D5B1805E_AC13_0F42_41D2_CC3FD0439B48_pressed_rollover.png"
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_D64C3B69_AC13_714E_41C2_32E6C6ABE2F2",
 "width": "100%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_D64C3B69_AC13_714E_41C2_32E6C6ABE2F2_rollover.png",
 "propagateClick": false,
 "minWidth": 1,
 "height": "25%",
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.openLink('https://www.google.com/maps/place/CMED+Construction+Company/@11.5450478,104.9248668,15z/data=!4m5!3m4!1s0x0:0x7e215fce7b5af38c!8m2!3d11.5450478!4d104.9248668', '_blank')",
 "class": "IconButton",
 "data": {
  "name": "Map"
 },
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_D64C3B69_AC13_714E_41C2_32E6C6ABE2F2.png",
 "pressedIconURL": "skin/IconButton_D64C3B69_AC13_714E_41C2_32E6C6ABE2F2_pressed.png",
 "shadow": false,
 "cursor": "hand"
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_DEE538D8_AC15_3F47_41B7_DF462598A300",
 "width": "100%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_DEE538D8_AC15_3F47_41B7_DF462598A300_rollover.png",
 "propagateClick": false,
 "minWidth": 1,
 "height": "25%",
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.openLink('https://www.linkedin.com/company/cmedcc/', '_blank')",
 "class": "IconButton",
 "data": {
  "name": "Linkin"
 },
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_DEE538D8_AC15_3F47_41B7_DF462598A300.png",
 "pressedIconURL": "skin/IconButton_DEE538D8_AC15_3F47_41B7_DF462598A300_pressed.png",
 "shadow": false,
 "cursor": "hand"
}],
 "desktopMipmappingEnabled": false,
 "propagateClick": false,
 "minWidth": 20,
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "mobileMipmappingEnabled": false,
 "gap": 10,
 "paddingTop": 0,
 "vrPolyfillScale": 0.5,
 "contentOpaque": false,
 "class": "Player",
 "scripts": {
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getKey": function(key){  return window[key]; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "existsKey": function(key){  return key in window; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "registerKey": function(key, value){  window[key] = value; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } }
 },
 "data": {
  "name": "Player3105"
 },
 "shadow": false,
 "scrollBarColor": "#000000",
 "buttonToggleFullscreen": "this.IconButton_BD225E9E_B273_D96C_41A9_C0F962709F6A",
 "mouseWheelEnabled": true,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
