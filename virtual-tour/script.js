(function(){
    var script = {
 "start": "this.playAudioList([this.audio_3AA4C02B_15CF_85D4_4196_5D14E83011AB]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.Button_485BFF41_598E_3DB2_41A9_33F36E014467], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A].forEach(function(component) { component.set('visible', false); }) }",
 "vrPolyfillScale": 0.5,
 "minHeight": 20,
 "height": "100%",
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_0C5F33A8_3BA0_A6FF_41C3_2A6652E2CE94",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 20,
 "shadow": false,
 "overflow": "visible",
 "desktopMipmappingEnabled": false,
 "propagateClick": true,
 "backgroundPreloadEnabled": true,
 "downloadEnabled": false,
 "buttonToggleMute": "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "verticalAlign": "top",
 "paddingRight": 0,
 "definitions": [{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_1F3161B1_14F9_8034_41AA_378E730BF5AF_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_36F1938F_1548_8AED_419B_144C3BD5B856",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0A2C59DA_154B_8677_4162_0DEBE42A3216_0_0.png",
   "width": 1024,
   "height": 1536
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0A2C59DA_154B_8677_4162_0DEBE42A3216_0_1.png",
   "width": 682,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0A2C59DA_154B_8677_4162_0DEBE42A3216_0_2.png",
   "width": 341,
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "75%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_0B5F28B2_15CF_8034_4188_5B5C22A27F89",
 "yaw": 120.34,
 "popupDistance": 100,
 "hfov": 11.52,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_0B5F28B2_15CF_8034_4188_5B5C22A27F89_0_1.png",
    "width": 682,
    "height": 1024
   }
  ]
 },
 "pitch": 8.93,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "75%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_1F37DB00_14F9_81D4_41B1_3C8FDDA24082_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "audio": {
  "mp3Url": "media/audio_385A72C8_2395_3BD0_4159_28D68D2F59B8.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_385A72C8_2395_3BD0_4159_28D68D2F59B8.ogg"
 },
 "data": {
  "label": "Ruang KIA"
 },
 "class": "MediaAudio",
 "id": "audio_385A72C8_2395_3BD0_4159_28D68D2F59B8",
 "autoplay": true
},
{
 "class": "ImageResource",
 "id": "ImageResource_0B740A13_1549_85F5_41A0_497CA784A7FD",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0A19F8BA_15BF_8034_41A4_69778B9F55F4_0_0.png",
   "width": 1024,
   "height": 1536
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0A19F8BA_15BF_8034_41A4_69778B9F55F4_0_1.png",
   "width": 682,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0A19F8BA_15BF_8034_41A4_69778B9F55F4_0_2.png",
   "width": 341,
   "height": 512
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_1F317123_14F9_81D4_4195_EE284EE2DF2E_t.jpg",
 "hfovMax": 130,
 "class": "Panorama",
 "label": "area kantor pegawai (2)",
 "id": "panorama_1F317123_14F9_81D4_4195_EE284EE2DF2E",
 "hfovMin": "150%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F317123_14F9_81D4_4195_EE284EE2DF2E_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F317123_14F9_81D4_4195_EE284EE2DF2E_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1F317123_14F9_81D4_4195_EE284EE2DF2E_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F317123_14F9_81D4_4195_EE284EE2DF2E_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F317123_14F9_81D4_4195_EE284EE2DF2E_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F317123_14F9_81D4_4195_EE284EE2DF2E_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F317123_14F9_81D4_4195_EE284EE2DF2E_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F317123_14F9_81D4_4195_EE284EE2DF2E_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F317123_14F9_81D4_4195_EE284EE2DF2E_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F317123_14F9_81D4_4195_EE284EE2DF2E_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F317123_14F9_81D4_4195_EE284EE2DF2E_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F317123_14F9_81D4_4195_EE284EE2DF2E_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F317123_14F9_81D4_4195_EE284EE2DF2E_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1F31E251_14F9_8074_41B2_AC50B5A88CE0",
   "backwardYaw": 34.94,
   "yaw": -16.61,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC",
   "backwardYaw": 153.14,
   "yaw": 9.66,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1",
   "backwardYaw": -179.51,
   "yaw": 165.39,
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_07B9C813_14D9_8FF4_41A2_6E074CEED78C",
  "this.overlay_0754AF63_14D8_8054_41A8_24C1778CB200",
  "this.overlay_072E5294_14DB_80FC_41A8_5CC49E7B930C"
 ],
 "vfov": 180,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 163.39,
  "pitch": 0
 },
 "id": "camera_21042589_3A91_A1EA_41C9_84CDDD4CCC25",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_1F31F69F_14F9_80EC_41B3_211C91BDCFDD_t.jpg",
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "label": "Halaman 1",
 "id": "panorama_1F31F69F_14F9_80EC_41B3_211C91BDCFDD",
 "hfovMin": "150%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F31F69F_14F9_80EC_41B3_211C91BDCFDD_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F31F69F_14F9_80EC_41B3_211C91BDCFDD_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1F31F69F_14F9_80EC_41B3_211C91BDCFDD_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F31F69F_14F9_80EC_41B3_211C91BDCFDD_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F31F69F_14F9_80EC_41B3_211C91BDCFDD_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F31F69F_14F9_80EC_41B3_211C91BDCFDD_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F31F69F_14F9_80EC_41B3_211C91BDCFDD_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F31F69F_14F9_80EC_41B3_211C91BDCFDD_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F31F69F_14F9_80EC_41B3_211C91BDCFDD_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F31F69F_14F9_80EC_41B3_211C91BDCFDD_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F31F69F_14F9_80EC_41B3_211C91BDCFDD_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F31F69F_14F9_80EC_41B3_211C91BDCFDD_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F31F69F_14F9_80EC_41B3_211C91BDCFDD_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1F37DB00_14F9_81D4_41B1_3C8FDDA24082",
   "backwardYaw": 162.79,
   "yaw": 78.23,
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_1B46A2D7_14F8_807C_41A8_0DB2AA2B27F6"
 ],
 "vfov": 180,
 "hfov": 360,
 "pitch": 0,
 "audios": [
  "this.audio_39AFE0BE_2077_16A2_41B4_92A561BAC942"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -14.61,
  "pitch": 0
 },
 "id": "camera_208A46E2_3A91_A35F_41C0_E388B3E3208A",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.49,
  "pitch": 0
 },
 "id": "camera_2799E7FC_3A91_A12A_41B9_7231A41C0F91",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_t.jpg",
 "hfovMax": 130,
 "class": "Panorama",
 "label": "area ruang pemeriksaan",
 "id": "panorama_1F307DEA_14F9_8054_4191_AA88601B95A5",
 "hfovMin": "150%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1F3713EC_14F9_802C_41AA_2388F8C053F7",
   "backwardYaw": -104.79,
   "yaw": 124.14,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC",
   "backwardYaw": -164.04,
   "yaw": 48.56,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1F31B40F_14F9_87EC_41A6_9B19E4101F79",
   "backwardYaw": -10.75,
   "yaw": -117.44,
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_0390490D_14B9_81EC_419C_F4871B272F8C",
  "this.overlay_0C93240A_14B7_87D4_41A1_E265B968D9B8",
  "this.overlay_024CBF10_154B_81F4_41AE_46E42EB9AE82",
  "this.overlay_02F5D9FF_154B_802C_41B3_2905A20BA74B",
  "this.overlay_0F51B78B_1548_80D4_418F_3934FDFCB349",
  "this.overlay_0F28C4DE_154F_806C_41AC_C975A6D21C8A",
  "this.overlay_08D0D622_1548_83D4_4180_AED7B38F9B30",
  "this.overlay_0B60CC5C_1549_806C_41A1_A6D139E05D9E",
  "this.overlay_08A5F627_1549_83DC_41AC_72FAEF49BF2A",
  "this.overlay_0BDFE797_1548_80FC_4171_CE143927A287",
  "this.overlay_0BDFDD8E_1548_80EC_41B4_33B7ED4828FD",
  "this.popup_0AB5FE51_15B9_8074_4198_751E614320C9",
  "this.popup_0BF84BCA_15B8_8054_41B4_726030FF89FB",
  "this.popup_0A19F8BA_15BF_8034_41A4_69778B9F55F4"
 ],
 "vfov": 180,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/album_3A7FF168_1548_8654_41B1_063A1A424633_t.png",
 "playList": "this.album_3A7FF168_1548_8654_41B1_063A1A424633_AlbumPlayList",
 "class": "PhotoAlbum",
 "label": "Photo Album 1",
 "id": "album_3A7FF168_1548_8654_41B1_063A1A424633"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "75%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_0A2C59DA_154B_8677_4162_0DEBE42A3216",
 "yaw": -14.59,
 "popupDistance": 100,
 "hfov": 9.7,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_0A2C59DA_154B_8677_4162_0DEBE42A3216_0_1.png",
    "width": 682,
    "height": 1024
   }
  ]
 },
 "pitch": 3.58,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "75%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "75%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_0A19F8BA_15BF_8034_41A4_69778B9F55F4",
 "yaw": 99.33,
 "popupDistance": 100,
 "hfov": 8.49,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_0A19F8BA_15BF_8034_41A4_69778B9F55F4_0_1.png",
    "width": 682,
    "height": 1024
   }
  ]
 },
 "pitch": 11.19,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "75%"
},
{
 "shadowBlurRadius": 6,
 "id": "window_39F8679B_15B7_8AF4_41B1_44B96943E7DF",
 "closeButtonPressedIconColor": "#FFFFFF",
 "width": 400,
 "titleTextDecoration": "none",
 "footerBackgroundOpacity": 0,
 "scrollBarWidth": 10,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "bodyBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "shadow": true,
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "modal": true,
 "bodyPaddingBottom": 0,
 "headerVerticalAlign": "middle",
 "backgroundColorRatios": [],
 "closeButtonIconLineWidth": 2,
 "paddingRight": 0,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "closeButtonIconColor": "#B2B2B2",
 "verticalAlign": "middle",
 "height": 600,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Window",
 "title": "",
 "closeButtonIconHeight": 20,
 "closeButtonIconWidth": 20,
 "closeButtonBackgroundColor": [],
 "gap": 10,
 "headerBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "backgroundColor": [],
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "titlePaddingRight": 5,
 "bodyPaddingTop": 0,
 "closeButtonRollOverBackgroundColor": [],
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "titleFontSize": "1.29vmin",
 "headerBorderSize": 0,
 "paddingTop": 0,
 "shadowHorizontalLength": 3,
 "paddingLeft": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "minHeight": 20,
 "veilOpacity": 0.4,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "children": [
  "this.container_21BBF510_3A91_A6FC_41AC_092ED10A5CF1"
 ],
 "bodyBackgroundOpacity": 0,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleFontWeight": "normal",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "propagateClick": false,
 "footerHeight": 5,
 "headerPaddingRight": 0,
 "bodyPaddingLeft": 0,
 "closeButtonPressedIconLineWidth": 3,
 "layout": "vertical",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingRight": 0,
 "bodyBorderColor": "#000000",
 "headerBackgroundOpacity": 0,
 "closeButtonBackgroundColorRatios": [],
 "horizontalAlign": "center",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBorderColor": "#000000",
 "closeButtonBorderRadius": 11,
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "footerBorderSize": 0,
 "headerPaddingTop": 10,
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonPressedBackgroundColor": [],
 "headerPaddingBottom": 5,
 "data": {
  "name": "Window82929"
 },
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "audio": {
  "mp3Url": "media/audio_380B660C_238F_3A3B_4182_D26C4806EE5C.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_380B660C_238F_3A3B_4182_D26C4806EE5C.ogg"
 },
 "data": {
  "label": "Ruang pemeriksaan umum"
 },
 "class": "MediaAudio",
 "id": "audio_380B660C_238F_3A3B_4182_D26C4806EE5C",
 "autoplay": true
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_1F31E251_14F9_8074_41B2_AC50B5A88CE0_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_1F317649_14F9_8054_419D_6A9896532704_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_1F31F69F_14F9_80EC_41B3_211C91BDCFDD",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1F31F69F_14F9_80EC_41B3_211C91BDCFDD_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_1F37DB00_14F9_81D4_41B1_3C8FDDA24082",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1F37DB00_14F9_81D4_41B1_3C8FDDA24082_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_1F349F75_14F9_803C_419C_22E547EC5CD7",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1F349F75_14F9_803C_419C_22E547EC5CD7_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_1F317123_14F9_81D4_4195_EE284EE2DF2E",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1F317123_14F9_81D4_4195_EE284EE2DF2E_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_1F307DEA_14F9_8054_4191_AA88601B95A5",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_1F31E251_14F9_8074_41B2_AC50B5A88CE0",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1F31E251_14F9_8074_41B2_AC50B5A88CE0_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_1F3713EC_14F9_802C_41AA_2388F8C053F7",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1F3713EC_14F9_802C_41AA_2388F8C053F7_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_1F313D4B_14F9_8054_4190_E14294522522",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1F313D4B_14F9_8054_4190_E14294522522_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_1F3161B1_14F9_8034_41AA_378E730BF5AF",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1F3161B1_14F9_8034_41AA_378E730BF5AF_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_1F317649_14F9_8054_419D_6A9896532704",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1F317649_14F9_8054_419D_6A9896532704_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "media": "this.panorama_1F36CF65_14F9_805C_41A2_E7D0E2D7618B",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1F36CF65_14F9_805C_41A2_E7D0E2D7618B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "media": "this.panorama_1F31B40F_14F9_87EC_41A6_9B19E4101F79",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1F31B40F_14F9_87EC_41A6_9B19E4101F79_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 0)",
   "media": "this.album_3A7FF168_1548_8654_41B1_063A1A424633",
   "end": "this.trigger('tourEnded')",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "thumbnailUrl": "media/panorama_1F36CF65_14F9_805C_41A2_E7D0E2D7618B_t.jpg",
 "hfovMax": 130,
 "class": "Panorama",
 "label": "wc pegawai",
 "id": "panorama_1F36CF65_14F9_805C_41A2_E7D0E2D7618B",
 "hfovMin": "150%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F36CF65_14F9_805C_41A2_E7D0E2D7618B_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F36CF65_14F9_805C_41A2_E7D0E2D7618B_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1F36CF65_14F9_805C_41A2_E7D0E2D7618B_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F36CF65_14F9_805C_41A2_E7D0E2D7618B_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F36CF65_14F9_805C_41A2_E7D0E2D7618B_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F36CF65_14F9_805C_41A2_E7D0E2D7618B_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F36CF65_14F9_805C_41A2_E7D0E2D7618B_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F36CF65_14F9_805C_41A2_E7D0E2D7618B_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F36CF65_14F9_805C_41A2_E7D0E2D7618B_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F36CF65_14F9_805C_41A2_E7D0E2D7618B_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F36CF65_14F9_805C_41A2_E7D0E2D7618B_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F36CF65_14F9_805C_41A2_E7D0E2D7618B_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F36CF65_14F9_805C_41A2_E7D0E2D7618B_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1F31E251_14F9_8074_41B2_AC50B5A88CE0",
   "backwardYaw": -57.67,
   "yaw": -2.28,
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_0C60AB28_1558_81D4_41B2_F8E0888D7091"
 ],
 "vfov": 180,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 177.72,
  "pitch": 0
 },
 "id": "camera_211EB59B_3A91_A1ED_41C3_170B877BEF46",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 115.36,
  "pitch": 0
 },
 "id": "camera_205D6735_3A91_A13A_41C0_5E740F59AE8A",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "75%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_0BF84BCA_15B8_8054_41B4_726030FF89FB",
 "yaw": -105.27,
 "popupDistance": 100,
 "hfov": 6.51,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_0BF84BCA_15B8_8054_41B4_726030FF89FB_0_1.png",
    "width": 768,
    "height": 1024
   }
  ]
 },
 "pitch": 8.16,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "75%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -123.56,
  "pitch": 0
 },
 "id": "camera_20D766B2_3A91_A33E_41C4_2D8624B4891A",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "audio": {
  "mp3Url": "media/audio_3B3D77A8_238D_19AB_417F_A1F413F6E03C.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_3B3D77A8_238D_19AB_417F_A1F413F6E03C.ogg"
 },
 "data": {
  "label": "Ruang Farmasi"
 },
 "class": "MediaAudio",
 "id": "audio_3B3D77A8_238D_19AB_417F_A1F413F6E03C",
 "autoplay": true
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "75%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_3589B8A5_1559_86DD_41A1_74FAFDAC9AB9",
 "yaw": -140.72,
 "popupDistance": 100,
 "hfov": 8.6,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_3589B8A5_1559_86DD_41A1_74FAFDAC9AB9_0_1.png",
    "width": 682,
    "height": 1024
   }
  ]
 },
 "pitch": 3.05,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "75%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 126.2,
  "pitch": 0
 },
 "id": "camera_20F436D3_3A91_A37D_41C3_A64F1CDFA533",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -60.99,
  "pitch": 0
 },
 "id": "camera_20E4C6C1_3A91_A35D_41B4_75A04D5A88C9",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "audio": {
  "mp3Url": "media/audio_3B9D604B_238A_F6E9_41BD_3229FBFEFA31.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_3B9D604B_238A_F6E9_41BD_3229FBFEFA31.ogg"
 },
 "data": {
  "label": "Ruang Administrasi"
 },
 "class": "MediaAudio",
 "id": "audio_3B9D604B_238A_F6E9_41BD_3229FBFEFA31",
 "autoplay": true
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 62.56,
  "pitch": 0
 },
 "id": "camera_27AFC80F_3A91_AEE6_41C4_276C9C1277C3",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_370BDC2D_15D7_802C_4181_6265B8FCADA4",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0B5F28B2_15CF_8034_4188_5B5C22A27F89_0_0.png",
   "width": 1024,
   "height": 1536
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0B5F28B2_15CF_8034_4188_5B5C22A27F89_0_1.png",
   "width": 682,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0B5F28B2_15CF_8034_4188_5B5C22A27F89_0_2.png",
   "width": 341,
   "height": 512
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_1F3713EC_14F9_802C_41AA_2388F8C053F7_t.jpg",
 "hfovMax": 130,
 "class": "Panorama",
 "label": "ruang pemeriksaan umum",
 "id": "panorama_1F3713EC_14F9_802C_41AA_2388F8C053F7",
 "hfovMin": "150%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3713EC_14F9_802C_41AA_2388F8C053F7_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F3713EC_14F9_802C_41AA_2388F8C053F7_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1F3713EC_14F9_802C_41AA_2388F8C053F7_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3713EC_14F9_802C_41AA_2388F8C053F7_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F3713EC_14F9_802C_41AA_2388F8C053F7_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3713EC_14F9_802C_41AA_2388F8C053F7_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F3713EC_14F9_802C_41AA_2388F8C053F7_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3713EC_14F9_802C_41AA_2388F8C053F7_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F3713EC_14F9_802C_41AA_2388F8C053F7_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3713EC_14F9_802C_41AA_2388F8C053F7_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F3713EC_14F9_802C_41AA_2388F8C053F7_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3713EC_14F9_802C_41AA_2388F8C053F7_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F3713EC_14F9_802C_41AA_2388F8C053F7_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1F307DEA_14F9_8054_4191_AA88601B95A5",
   "backwardYaw": 124.14,
   "yaw": -104.79,
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_0F09EBB9_154B_8034_4184_EC07A1596C17",
  "this.overlay_0B3F5111_15B9_81F4_41A7_6ADF03B1A705",
  "this.overlay_0AF5513D_154B_862D_4190_BC737ED55979",
  "this.popup_359F320F_1549_85ED_41B2_56D0C37CD393"
 ],
 "vfov": 180,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_1F313D4B_14F9_8054_4190_E14294522522_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1_t.jpg",
 "hfovMax": 130,
 "class": "Panorama",
 "label": "area kantor pegawai",
 "id": "panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1",
 "hfovMin": "150%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1F313D4B_14F9_8054_4190_E14294522522",
   "backwardYaw": 119.01,
   "yaw": -5.44,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1F3161B1_14F9_8034_41AA_378E730BF5AF",
   "backwardYaw": -53.8,
   "yaw": -81.81,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1F317123_14F9_81D4_4195_EE284EE2DF2E",
   "backwardYaw": 165.39,
   "yaw": -179.51,
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_01DD6B15_14D7_81FC_41B3_87944A669E02",
  "this.overlay_00685F5C_14C8_806C_4196_3DFCF8E8A4DB",
  "this.overlay_01C4BD07_14C8_81DC_418C_16C98F73D6CD",
  "this.overlay_00078AD5_14C9_807C_419F_70051DE2E646",
  "this.overlay_0378F948_14B8_8054_41B3_6F230CDE7E73",
  "this.overlay_0B29AA58_1548_8074_41B1_350D1CAACCC0",
  "this.overlay_35517512_154B_81F4_41B0_100019AB2DCB",
  "this.overlay_080928A7_154B_80DC_41AF_17D5D4B7438F",
  "this.overlay_0B111BA1_1548_80D4_4152_7C072BCA98E7",
  "this.popup_0B5F28B2_15CF_8034_4188_5B5C22A27F89",
  "this.popup_3589B8A5_1559_86DD_41A1_74FAFDAC9AB9"
 ],
 "vfov": 180,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -159.29,
  "pitch": 0
 },
 "id": "camera_212AB677_3A91_A326_41B2_E6576838EC5F",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_1F349F75_14F9_803C_419C_22E547EC5CD7_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/album_3A7FF168_1548_8654_41B1_063A1A424633_0_t.jpg",
 "duration": 5000,
 "id": "album_3A7FF168_1548_8654_41B1_063A1A424633_0",
 "width": 1600,
 "label": "1",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_3A7FF168_1548_8654_41B1_063A1A424633_0.jpeg"
   }
  ]
 },
 "class": "Photo",
 "height": 1200
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_1F31B40F_14F9_87EC_41A6_9B19E4101F79_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 174.56,
  "pitch": 0
 },
 "id": "camera_206CF746_3A91_A166_41BB_FAD0B04FA63C",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "audio": {
  "mp3Url": "media/audio_3BADDCB5_2395_2FBF_4193_E7AFD2A062CB.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_3BADDCB5_2395_2FBF_4193_E7AFD2A062CB.ogg"
 },
 "data": {
  "label": "Ruang Rapat"
 },
 "class": "MediaAudio",
 "id": "audio_3BADDCB5_2395_2FBF_4193_E7AFD2A062CB",
 "autoplay": true
},
{
 "audio": {
  "mp3Url": "media/audio_38412335_239A_FAB6_41B6_284B9799CD53.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_38412335_239A_FAB6_41B6_284B9799CD53.ogg"
 },
 "data": {
  "label": "Ruang TB"
 },
 "class": "MediaAudio",
 "id": "audio_38412335_239A_FAB6_41B6_284B9799CD53",
 "autoplay": true
},
{
 "class": "ImageResource",
 "id": "ImageResource_0B775A13_1549_85F5_419C_E3E3F17DC8E6",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0BF84BCA_15B8_8054_41B4_726030FF89FB_0_0.png",
   "width": 1086,
   "height": 1448
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0BF84BCA_15B8_8054_41B4_726030FF89FB_0_1.png",
   "width": 768,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0BF84BCA_15B8_8054_41B4_726030FF89FB_0_2.png",
   "width": 384,
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -17.21,
  "pitch": 0
 },
 "id": "camera_211795AC_3A91_A12A_41B8_E56EA2D19597",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "change": "this.showComponentsWhileMouseOver(this.container_21BBF510_3A91_A6FC_41AC_092ED10A5CF1, [this.htmltext_21B5E511_3A91_A6FD_41C9_BC3B27F5EB4D,this.component_21B62514_3A91_A6FB_41B7_E8C361CFEEFC,this.component_21B63514_3A91_A6FB_4198_B40716074FFD], 2000)",
 "class": "PlayList",
 "items": [
  "this.albumitem_21BB3510_3A91_A6FB_41B4_F42FFE97354F"
 ],
 "id": "playList_3B996D9C_2AF2_AB0B_418C_ECB45CFDF0A5"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 33,
  "pitch": 0
 },
 "id": "camera_20023777_3A91_A126_41B3_5ED5FD01FD35",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_1F349F75_14F9_803C_419C_22E547EC5CD7_t.jpg",
 "hfovMax": 130,
 "class": "Panorama",
 "label": "Halaman ruang persalinan",
 "id": "panorama_1F349F75_14F9_803C_419C_22E547EC5CD7",
 "hfovMin": "150%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F349F75_14F9_803C_419C_22E547EC5CD7_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F349F75_14F9_803C_419C_22E547EC5CD7_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1F349F75_14F9_803C_419C_22E547EC5CD7_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F349F75_14F9_803C_419C_22E547EC5CD7_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F349F75_14F9_803C_419C_22E547EC5CD7_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F349F75_14F9_803C_419C_22E547EC5CD7_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F349F75_14F9_803C_419C_22E547EC5CD7_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F349F75_14F9_803C_419C_22E547EC5CD7_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F349F75_14F9_803C_419C_22E547EC5CD7_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F349F75_14F9_803C_419C_22E547EC5CD7_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F349F75_14F9_803C_419C_22E547EC5CD7_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F349F75_14F9_803C_419C_22E547EC5CD7_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F349F75_14F9_803C_419C_22E547EC5CD7_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1F37DB00_14F9_81D4_41B1_3C8FDDA24082",
   "backwardYaw": 106.32,
   "yaw": 56.44,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1F317649_14F9_8054_419D_6A9896532704",
   "backwardYaw": -75.08,
   "yaw": -131.8,
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_06657307_14C8_81DC_4195_2A4CAB0A7788",
  "this.overlay_05869899_14CB_80F4_41A1_584799C2D214",
  "this.overlay_35AFAF68_1549_8054_41B1_B6DFD0F4FD8F"
 ],
 "vfov": 180,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_1F313D4B_14F9_8054_4190_E14294522522_t.jpg",
 "hfovMax": 130,
 "class": "Panorama",
 "label": "Ruang rapat",
 "id": "panorama_1F313D4B_14F9_8054_4190_E14294522522",
 "hfovMin": "150%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F313D4B_14F9_8054_4190_E14294522522_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F313D4B_14F9_8054_4190_E14294522522_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1F313D4B_14F9_8054_4190_E14294522522_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F313D4B_14F9_8054_4190_E14294522522_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F313D4B_14F9_8054_4190_E14294522522_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F313D4B_14F9_8054_4190_E14294522522_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F313D4B_14F9_8054_4190_E14294522522_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F313D4B_14F9_8054_4190_E14294522522_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F313D4B_14F9_8054_4190_E14294522522_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F313D4B_14F9_8054_4190_E14294522522_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F313D4B_14F9_8054_4190_E14294522522_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F313D4B_14F9_8054_4190_E14294522522_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F313D4B_14F9_8054_4190_E14294522522_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1",
   "backwardYaw": -5.44,
   "yaw": 119.01,
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_0D9935C2_155B_8054_41B3_A57BF65954BA",
  "this.overlay_0B6DDB66_1549_9A5F_41B1_EDAD97128C74",
  "this.overlay_0AFD8569_1549_8E55_4197_94275AFCFB57",
  "this.overlay_0AC1D64A_154B_8A57_419F_A9B88550C6FC",
  "this.overlay_0A59D076_154B_863F_41A5_9A4C37A4AF72",
  "this.popup_0B11135D_154F_8A6D_41A1_31AB06EF67B1",
  "this.popup_0B06DF52_1548_9A77_41A9_F970CD169D3F"
 ],
 "vfov": 180,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 122.33,
  "pitch": 0
 },
 "id": "camera_20BFF714_3A91_A2FA_419D_E490938E5A0A",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -131.44,
  "pitch": 0
 },
 "id": "camera_20634757_3A91_A166_41C9_713058975AEC",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -159.58,
  "pitch": 0
 },
 "id": "camera_204F7724_3A91_A2DA_41C7_76FA4D688A45",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -145.06,
  "pitch": 0
 },
 "id": "camera_27FB17DE_3A91_A167_41AF_1A808A357C8B",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -8.26,
  "pitch": -10.24
 },
 "id": "panorama_1F31F69F_14F9_80EC_41B3_211C91BDCFDD_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "pitchSpeed": 17.05,
    "targetPitch": -17.43,
    "targetYaw": 9.76,
    "path": "shortest",
    "yawSpeed": 33.25,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in_out"
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -159.29,
  "pitch": 0
 },
 "id": "camera_213DE686_3A91_A3E7_419C_D38DD6FFCFA0",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_0B730A13_1549_85F5_418B_E562389C8A65",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0B06DF52_1548_9A77_41A9_F970CD169D3F_0_0.png",
   "width": 1086,
   "height": 1448
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0B06DF52_1548_9A77_41A9_F970CD169D3F_0_1.png",
   "width": 768,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0B06DF52_1548_9A77_41A9_F970CD169D3F_0_2.png",
   "width": 384,
   "height": 512
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_0B764A0A_1549_85D7_41B3_4C5189261BA9",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0AB5FE51_15B9_8074_4198_751E614320C9_0_0.png",
   "width": 1024,
   "height": 1535
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0AB5FE51_15B9_8074_4198_751E614320C9_0_1.png",
   "width": 683,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0AB5FE51_15B9_8074_4198_751E614320C9_0_2.png",
   "width": 341,
   "height": 512
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_1F37DB00_14F9_81D4_41B1_3C8FDDA24082_t.jpg",
 "hfovMax": 130,
 "class": "Panorama",
 "label": "Halaman 2",
 "id": "panorama_1F37DB00_14F9_81D4_41B1_3C8FDDA24082",
 "hfovMin": "150%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F37DB00_14F9_81D4_41B1_3C8FDDA24082_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F37DB00_14F9_81D4_41B1_3C8FDDA24082_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1F37DB00_14F9_81D4_41B1_3C8FDDA24082_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F37DB00_14F9_81D4_41B1_3C8FDDA24082_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F37DB00_14F9_81D4_41B1_3C8FDDA24082_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F37DB00_14F9_81D4_41B1_3C8FDDA24082_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F37DB00_14F9_81D4_41B1_3C8FDDA24082_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F37DB00_14F9_81D4_41B1_3C8FDDA24082_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F37DB00_14F9_81D4_41B1_3C8FDDA24082_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F37DB00_14F9_81D4_41B1_3C8FDDA24082_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F37DB00_14F9_81D4_41B1_3C8FDDA24082_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F37DB00_14F9_81D4_41B1_3C8FDDA24082_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F37DB00_14F9_81D4_41B1_3C8FDDA24082_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58",
   "backwardYaw": 20.71,
   "yaw": -64.64,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58",
   "backwardYaw": 20.71,
   "yaw": -64.64,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1F31F69F_14F9_80EC_41B3_211C91BDCFDD",
   "backwardYaw": 78.23,
   "yaw": 162.79,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1F349F75_14F9_803C_419C_22E547EC5CD7",
   "backwardYaw": 56.44,
   "yaw": 106.32,
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_04AC8335_14F8_803C_41AA_1BF5D334A23C",
  "this.overlay_00F3BF12_14CF_81F4_41AB_E4799C2594CE",
  "this.overlay_395F74A4_238D_7E8E_41B2_194EBEC4BA93"
 ],
 "vfov": 180,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC_t.jpg",
 "hfovMax": 130,
 "class": "Panorama",
 "label": "area Farmasi",
 "id": "panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC",
 "hfovMin": "150%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1F307DEA_14F9_8054_4191_AA88601B95A5",
   "backwardYaw": 48.56,
   "yaw": -164.04,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1F37DB00_14F9_81D4_41B1_3C8FDDA24082"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1F317123_14F9_81D4_4195_EE284EE2DF2E",
   "backwardYaw": 9.66,
   "yaw": 153.14,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58",
   "backwardYaw": -147,
   "yaw": 20.42,
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_06AFA240_14C9_8054_417E_805F68E9E980",
  "this.overlay_068B8219_14C8_83F4_41A1_1F48A7617154",
  "this.overlay_06B9D39E_14D7_80EC_41AF_46C97FB87E83",
  "this.overlay_06B0FCE1_14D8_8054_41A3_FCF1606D7606",
  "this.overlay_355A0689_154F_80D4_418E_9118062C4687",
  "this.overlay_08D8507C_1548_802C_41A4_92610281C9B2",
  "this.popup_0B97FE0F_15F9_83EC_41A1_25002E15B6BC"
 ],
 "vfov": 180,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "75%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_0AA6834E_1558_8A6F_41AE_55F46C7907EA",
 "yaw": 18.09,
 "popupDistance": 100,
 "hfov": 10.72,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_0AA6834E_1558_8A6F_41AE_55F46C7907EA_0_1.png",
    "width": 682,
    "height": 1024
   }
  ]
 },
 "pitch": 0.41,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "75%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -170.34,
  "pitch": 0
 },
 "id": "camera_2072D767_3A91_A126_41A4_88B3E995234F",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "audio": {
  "mp3Url": "media/audio_38ED0582_2397_1E57_4184_422CCC9EC0C1.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_38ED0582_2397_1E57_4184_422CCC9EC0C1.ogg"
 },
 "data": {
  "label": "Ruang P anak"
 },
 "class": "MediaAudio",
 "id": "audio_38ED0582_2397_1E57_4184_422CCC9EC0C1",
 "autoplay": true
},
{
 "thumbnailUrl": "media/panorama_1F31B40F_14F9_87EC_41A6_9B19E4101F79_t.jpg",
 "hfovMax": 130,
 "class": "Panorama",
 "label": "wc umum",
 "id": "panorama_1F31B40F_14F9_87EC_41A6_9B19E4101F79",
 "hfovMin": "150%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F31B40F_14F9_87EC_41A6_9B19E4101F79_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F31B40F_14F9_87EC_41A6_9B19E4101F79_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1F31B40F_14F9_87EC_41A6_9B19E4101F79_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F31B40F_14F9_87EC_41A6_9B19E4101F79_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F31B40F_14F9_87EC_41A6_9B19E4101F79_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F31B40F_14F9_87EC_41A6_9B19E4101F79_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F31B40F_14F9_87EC_41A6_9B19E4101F79_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F31B40F_14F9_87EC_41A6_9B19E4101F79_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F31B40F_14F9_87EC_41A6_9B19E4101F79_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F31B40F_14F9_87EC_41A6_9B19E4101F79_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F31B40F_14F9_87EC_41A6_9B19E4101F79_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F31B40F_14F9_87EC_41A6_9B19E4101F79_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F31B40F_14F9_87EC_41A6_9B19E4101F79_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1F307DEA_14F9_8054_4191_AA88601B95A5",
   "backwardYaw": -117.44,
   "yaw": -10.75,
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_0C4CB940_1559_8054_41B2_D7A250F895BC",
  "this.overlay_089AA7FC_15B8_802C_41A6_3879F0A2D093"
 ],
 "vfov": 180,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_1F31E251_14F9_8074_41B2_AC50B5A88CE0_t.jpg",
 "hfovMax": 130,
 "class": "Panorama",
 "label": "area tamu",
 "id": "panorama_1F31E251_14F9_8074_41B2_AC50B5A88CE0",
 "hfovMin": "150%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F31E251_14F9_8074_41B2_AC50B5A88CE0_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F31E251_14F9_8074_41B2_AC50B5A88CE0_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1F31E251_14F9_8074_41B2_AC50B5A88CE0_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F31E251_14F9_8074_41B2_AC50B5A88CE0_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F31E251_14F9_8074_41B2_AC50B5A88CE0_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F31E251_14F9_8074_41B2_AC50B5A88CE0_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F31E251_14F9_8074_41B2_AC50B5A88CE0_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F31E251_14F9_8074_41B2_AC50B5A88CE0_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F31E251_14F9_8074_41B2_AC50B5A88CE0_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F31E251_14F9_8074_41B2_AC50B5A88CE0_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F31E251_14F9_8074_41B2_AC50B5A88CE0_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F31E251_14F9_8074_41B2_AC50B5A88CE0_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F31E251_14F9_8074_41B2_AC50B5A88CE0_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1F317123_14F9_81D4_4195_EE284EE2DF2E",
   "backwardYaw": -16.61,
   "yaw": 34.94,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1F36CF65_14F9_805C_41A2_E7D0E2D7618B",
   "backwardYaw": -2.28,
   "yaw": -57.67,
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_02DF738D_1548_80EC_41B3_FFA052F05161",
  "this.overlay_0D8AB28B_1548_80D4_419D_A10C5D25591C"
 ],
 "vfov": 180,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_1F3161B1_14F9_8034_41AA_378E730BF5AF_t.jpg",
 "hfovMax": 130,
 "class": "Panorama",
 "label": "ruang UKM",
 "id": "panorama_1F3161B1_14F9_8034_41AA_378E730BF5AF",
 "hfovMin": "150%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3161B1_14F9_8034_41AA_378E730BF5AF_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F3161B1_14F9_8034_41AA_378E730BF5AF_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1F3161B1_14F9_8034_41AA_378E730BF5AF_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3161B1_14F9_8034_41AA_378E730BF5AF_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F3161B1_14F9_8034_41AA_378E730BF5AF_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3161B1_14F9_8034_41AA_378E730BF5AF_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F3161B1_14F9_8034_41AA_378E730BF5AF_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3161B1_14F9_8034_41AA_378E730BF5AF_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F3161B1_14F9_8034_41AA_378E730BF5AF_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3161B1_14F9_8034_41AA_378E730BF5AF_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F3161B1_14F9_8034_41AA_378E730BF5AF_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3161B1_14F9_8034_41AA_378E730BF5AF_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F3161B1_14F9_8034_41AA_378E730BF5AF_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1",
   "backwardYaw": -81.81,
   "yaw": -53.8,
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_0CF74CAE_1549_802C_41B1_E79D530D1E9C",
  "this.overlay_0B1B1D75_15B9_803D_419F_693ADF26A707",
  "this.overlay_0AEED481_1559_8ED5_4192_BC33CC02E5A0",
  "this.popup_0A3D4790_1579_8AF3_41B0_0AC3BA508D08"
 ],
 "vfov": 180,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_1F36CF65_14F9_805C_41A2_E7D0E2D7618B_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "75%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_359F320F_1549_85ED_41B2_56D0C37CD393",
 "yaw": 148.85,
 "popupDistance": 100,
 "hfov": 13.51,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_359F320F_1549_85ED_41B2_56D0C37CD393_0_1.png",
    "width": 768,
    "height": 1024
   }
  ]
 },
 "pitch": 12.98,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "75%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_1F3713EC_14F9_802C_41AA_2388F8C053F7_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_3675246F_1549_8E2D_4155_64EDB65FCDB4",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_359F320F_1549_85ED_41B2_56D0C37CD393_0_0.png",
   "width": 1086,
   "height": 1448
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_359F320F_1549_85ED_41B2_56D0C37CD393_0_1.png",
   "width": 768,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_359F320F_1549_85ED_41B2_56D0C37CD393_0_2.png",
   "width": 384,
   "height": 512
  }
 ]
},
{
 "thumbnailUrl": "media/album_3A7FF168_1548_8654_41B1_063A1A424633_2_t.jpg",
 "duration": 5000,
 "id": "album_3A7FF168_1548_8654_41B1_063A1A424633_2",
 "width": 1080,
 "label": "3",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_3A7FF168_1548_8654_41B1_063A1A424633_2.jpeg"
   }
  ]
 },
 "class": "Photo",
 "height": 1035
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "75%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_0B97FE0F_15F9_83EC_41A1_25002E15B6BC",
 "yaw": -39.24,
 "popupDistance": 100,
 "hfov": 9.55,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_0B97FE0F_15F9_83EC_41A1_25002E15B6BC_0_1.png",
    "width": 682,
    "height": 1024
   }
  ]
 },
 "pitch": 10.98,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "75%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 48.2,
  "pitch": 0
 },
 "id": "camera_20AFB704_3A91_A2DA_41C0_B013CBD00217",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "75%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_0AB5FE51_15B9_8074_4198_751E614320C9",
 "yaw": 0.35,
 "popupDistance": 100,
 "hfov": 10.27,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_0AB5FE51_15B9_8074_4198_751E614320C9_0_1.png",
    "width": 683,
    "height": 1024
   }
  ]
 },
 "pitch": 10.75,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "75%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_1F317123_14F9_81D4_4195_EE284EE2DF2E_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "75%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_0BDB0E74_15B8_803C_419E_33F0236CE51C",
 "yaw": -94.94,
 "popupDistance": 100,
 "hfov": 11.72,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_0BDB0E74_15B8_803C_419E_33F0236CE51C_0_1.png",
    "width": 682,
    "height": 1024
   }
  ]
 },
 "pitch": 1.76,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "75%"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "75%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_0B11135D_154F_8A6D_41A1_31AB06EF67B1",
 "yaw": -137.31,
 "popupDistance": 100,
 "hfov": 11.81,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_0B11135D_154F_8A6D_41A1_31AB06EF67B1_0_1.png",
    "width": 768,
    "height": 1024
   }
  ]
 },
 "pitch": -3.37,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "75%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 15.96,
  "pitch": 0
 },
 "id": "camera_27C647B2_3A91_A13E_41C7_1D3EC2ED28C5",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "buttonToggleHotspots": "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "buttonCardboardView": "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation"
},
{
 "thumbnailUrl": "media/album_3A7FF168_1548_8654_41B1_063A1A424633_1_t.jpg",
 "duration": 5000,
 "id": "album_3A7FF168_1548_8654_41B1_063A1A424633_1",
 "width": 1080,
 "label": "2",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_3A7FF168_1548_8654_41B1_063A1A424633_1.jpeg"
   }
  ]
 },
 "class": "Photo",
 "height": 1038
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -26.86,
  "pitch": 0
 },
 "id": "camera_2789A7EE_3A91_A127_41C6_D626F8AFAF0A",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "media": "this.panorama_1F31F69F_14F9_80EC_41B3_211C91BDCFDD",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1F31F69F_14F9_80EC_41B3_211C91BDCFDD_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "media": "this.panorama_1F37DB00_14F9_81D4_41B1_3C8FDDA24082",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1F37DB00_14F9_81D4_41B1_3C8FDDA24082_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "media": "this.panorama_1F349F75_14F9_803C_419C_22E547EC5CD7",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1F349F75_14F9_803C_419C_22E547EC5CD7_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "media": "this.panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "media": "this.panorama_1F317123_14F9_81D4_4195_EE284EE2DF2E",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1F317123_14F9_81D4_4195_EE284EE2DF2E_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "media": "this.panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "media": "this.panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "media": "this.panorama_1F307DEA_14F9_8054_4191_AA88601B95A5",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "media": "this.panorama_1F31E251_14F9_8074_41B2_AC50B5A88CE0",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1F31E251_14F9_8074_41B2_AC50B5A88CE0_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "media": "this.panorama_1F3713EC_14F9_802C_41AA_2388F8C053F7",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1F3713EC_14F9_802C_41AA_2388F8C053F7_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "media": "this.panorama_1F313D4B_14F9_8054_4190_E14294522522",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1F313D4B_14F9_8054_4190_E14294522522_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "media": "this.panorama_1F3161B1_14F9_8034_41AA_378E730BF5AF",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1F3161B1_14F9_8034_41AA_378E730BF5AF_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "media": "this.panorama_1F317649_14F9_8054_419D_6A9896532704",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1F317649_14F9_8054_419D_6A9896532704_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "media": "this.panorama_1F36CF65_14F9_805C_41A2_E7D0E2D7618B",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1F36CF65_14F9_805C_41A2_E7D0E2D7618B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "media": "this.panorama_1F31B40F_14F9_87EC_41A6_9B19E4101F79",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1F31B40F_14F9_87EC_41A6_9B19E4101F79_camera"
  },
  {
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_3A7FF168_1548_8654_41B1_063A1A424633",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "75%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_0A3D4790_1579_8AF3_41B0_0AC3BA508D08",
 "yaw": 73.62,
 "popupDistance": 100,
 "hfov": 13.29,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_0A3D4790_1579_8AF3_41B0_0AC3BA508D08_0_1.png",
    "width": 724,
    "height": 1024
   }
  ]
 },
 "pitch": -10.81,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "75%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_0AC753AB_1578_8AD5_4183_0A896956FD04",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0A3D4790_1579_8AF3_41B0_0AC3BA508D08_0_0.png",
   "width": 1055,
   "height": 1491
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0A3D4790_1579_8AF3_41B0_0AC3BA508D08_0_1.png",
   "width": 724,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0A3D4790_1579_8AF3_41B0_0AC3BA508D08_0_2.png",
   "width": 362,
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -73.68,
  "pitch": 0
 },
 "id": "camera_20103786_3A91_A1E7_41C1_C0AF48987B5D",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 75.21,
  "pitch": 0
 },
 "id": "camera_203647A3_3A91_A1DD_4169_04B1D4EBA997",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -55.86,
  "pitch": 0
 },
 "id": "camera_2099B6F3_3A91_A33D_4186_9942B0E2CBCD",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_0B73FA13_1549_85F5_41B4_D986C8E5AF20",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0B11135D_154F_8A6D_41A1_31AB06EF67B1_0_0.png",
   "width": 1086,
   "height": 1448
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0B11135D_154F_8A6D_41A1_31AB06EF67B1_0_1.png",
   "width": 768,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0B11135D_154F_8A6D_41A1_31AB06EF67B1_0_2.png",
   "width": 384,
   "height": 512
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58_t.jpg",
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "label": "area pendaftaran",
 "id": "panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58",
 "hfovMin": "150%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC",
   "backwardYaw": 20.42,
   "yaw": -147,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1F37DB00_14F9_81D4_41B1_3C8FDDA24082",
   "backwardYaw": -64.64,
   "yaw": 20.71,
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_02B5930C_14C9_81EC_41B0_BC036785662E",
  "this.overlay_01838047_14C9_805C_4196_2C32D2FF947B",
  "this.overlay_0CE7A0C5_14BB_805C_41AD_E67FF192C3E5",
  "this.overlay_0AA4ADDC_1548_806C_41A6_7A9B1EC87677",
  "this.popup_0BDB0E74_15B8_803C_419E_33F0236CE51C",
  "this.overlay_0A096175_1557_863D_41B2_E6EBDF68E759",
  "this.overlay_0A43CFA9_1548_9AD5_4197_49CDABD8ADF6",
  "this.popup_0A2C59DA_154B_8677_4162_0DEBE42A3216"
 ],
 "vfov": 180,
 "hfov": 360,
 "pitch": 0,
 "audios": [
  "this.audio_3B7A1EF2_23B7_2A1A_4195_7E74520789FB"
 ]
},
{
 "audio": {
  "mp3Url": "media/audio_3AA4C02B_15CF_85D4_4196_5D14E83011AB.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_3AA4C02B_15CF_85D4_4196_5D14E83011AB.ogg"
 },
 "data": {
  "label": "nastelbom-corporate-soft-488321"
 },
 "class": "MediaAudio",
 "id": "audio_3AA4C02B_15CF_85D4_4196_5D14E83011AB",
 "autoplay": true
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -101.77,
  "pitch": 0
 },
 "id": "camera_21321695_3A91_A3FA_41AF_18D6A00980B5",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "pitchSpeed": 78.8,
    "targetPitch": -10.24,
    "targetYaw": -8.26,
    "path": "shortest",
    "yawSpeed": 157.33,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in_out"
   },
   {
    "pitchSpeed": 17.05,
    "targetPitch": -17.43,
    "targetYaw": 9.76,
    "path": "shortest",
    "yawSpeed": 33.25,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in_out"
   }
  ]
 }
},
{
 "audio": {
  "mp3Url": "media/audio_39AFE0BE_2077_16A2_41B4_92A561BAC942.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_39AFE0BE_2077_16A2_41B4_92A561BAC942.ogg"
 },
 "data": {
  "label": "Welcome.mpeg"
 },
 "class": "PanoramaAudio",
 "id": "audio_39AFE0BE_2077_16A2_41B4_92A561BAC942",
 "autoplay": true
},
{
 "thumbnailUrl": "media/panorama_1F317649_14F9_8054_419D_6A9896532704_t.jpg",
 "hfovMax": 130,
 "class": "Panorama",
 "label": "ruangan persalinan",
 "id": "panorama_1F317649_14F9_8054_419D_6A9896532704",
 "hfovMin": "150%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F317649_14F9_8054_419D_6A9896532704_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F317649_14F9_8054_419D_6A9896532704_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1F317649_14F9_8054_419D_6A9896532704_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F317649_14F9_8054_419D_6A9896532704_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F317649_14F9_8054_419D_6A9896532704_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F317649_14F9_8054_419D_6A9896532704_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F317649_14F9_8054_419D_6A9896532704_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F317649_14F9_8054_419D_6A9896532704_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F317649_14F9_8054_419D_6A9896532704_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F317649_14F9_8054_419D_6A9896532704_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F317649_14F9_8054_419D_6A9896532704_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1F317649_14F9_8054_419D_6A9896532704_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1F317649_14F9_8054_419D_6A9896532704_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1F349F75_14F9_803C_419C_22E547EC5CD7",
   "backwardYaw": -131.8,
   "yaw": -75.08,
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_0CEBD2A5_1557_80DC_4199_98D948D172BE",
  "this.overlay_0B8051A7_15B8_86DD_4196_0EAF6425E5E4",
  "this.overlay_0BB1F03F_15B9_862D_41A9_215BEA9DAC8C",
  "this.popup_0AA6834E_1558_8A6F_41AE_55F46C7907EA"
 ],
 "vfov": 180,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "class": "ImageResource",
 "id": "ImageResource_36CFD38D_1548_8AED_41A7_9F937432B21D",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_3589B8A5_1559_86DD_41A1_74FAFDAC9AB9_0_0.png",
   "width": 1024,
   "height": 1536
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_3589B8A5_1559_86DD_41A1_74FAFDAC9AB9_0_1.png",
   "width": 682,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_3589B8A5_1559_86DD_41A1_74FAFDAC9AB9_0_2.png",
   "width": 341,
   "height": 512
  }
 ]
},
{
 "audio": {
  "mp3Url": "media/audio_3B7A1EF2_23B7_2A1A_4195_7E74520789FB.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_3B7A1EF2_23B7_2A1A_4195_7E74520789FB.ogg"
 },
 "data": {
  "label": "Tekan ikon informasi"
 },
 "class": "PanoramaAudio",
 "id": "audio_3B7A1EF2_23B7_2A1A_4195_7E74520789FB",
 "autoplay": true
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 98.19,
  "pitch": 0
 },
 "id": "camera_27EBA7D0_3A91_A17B_41C6_DE79D7561603",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "75%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_0B06DF52_1548_9A77_41A9_F970CD169D3F",
 "yaw": 69.4,
 "popupDistance": 100,
 "hfov": 10.92,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_0B06DF52_1548_9A77_41A9_F970CD169D3F_0_1.png",
    "width": 768,
    "height": 1024
   }
  ]
 },
 "pitch": 3.13,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "75%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 104.92,
  "pitch": 0
 },
 "id": "camera_20278795_3A91_A1E5_41C3_6101560D7B9D",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_36F9C399_1548_8AF5_41A7_C2A4BDC91476",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0AA6834E_1558_8A6F_41AE_55F46C7907EA_0_0.png",
   "width": 1024,
   "height": 1536
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0AA6834E_1558_8A6F_41AE_55F46C7907EA_0_1.png",
   "width": 682,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0AA6834E_1558_8A6F_41AE_55F46C7907EA_0_2.png",
   "width": 341,
   "height": 512
  }
 ]
},
{
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
},
{
 "thumbnailUrl": "media/album_3A7FF168_1548_8654_41B1_063A1A424633_3_t.jpg",
 "duration": 5000,
 "id": "album_3A7FF168_1548_8654_41B1_063A1A424633_3",
 "width": 1080,
 "label": "4",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_3A7FF168_1548_8654_41B1_063A1A424633_3.jpeg"
   }
  ]
 },
 "class": "Photo",
 "height": 1041
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 169.25,
  "pitch": 0
 },
 "id": "camera_27D447C2_3A91_A15E_41C4_DDC799D8D89C",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_357B5C6E_15F8_802C_41B4_72483618F44E",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0B97FE0F_15F9_83EC_41A1_25002E15B6BC_0_0.png",
   "width": 1024,
   "height": 1536
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0B97FE0F_15F9_83EC_41A1_25002E15B6BC_0_1.png",
   "width": 682,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0B97FE0F_15F9_83EC_41A1_25002E15B6BC_0_2.png",
   "width": 341,
   "height": 512
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_0B694A0A_1549_85D7_41AF_A98998B61FF6",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0BDB0E74_15B8_803C_419E_33F0236CE51C_0_0.png",
   "width": 1024,
   "height": 1536
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0BDB0E74_15B8_803C_419E_33F0236CE51C_0_1.png",
   "width": 682,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0BDB0E74_15B8_803C_419E_33F0236CE51C_0_2.png",
   "width": 341,
   "height": 512
  }
 ]
},
{
 "audio": {
  "mp3Url": "media/audio_39434E72_23BD_6A0F_41B6_8ECEE8996797.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_39434E72_23BD_6A0F_41B6_8ECEE8996797.ogg"
 },
 "data": {
  "label": "Ruang pendaftaran"
 },
 "class": "MediaAudio",
 "id": "audio_39434E72_23BD_6A0F_41B6_8ECEE8996797",
 "autoplay": true
},
{
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingTop": 7,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "toolTipPaddingRight": 10,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "left": 0,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 100,
 "toolTipPaddingLeft": 10,
 "playbackBarHeadShadowBlurRadius": 3,
 "shadow": false,
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "paddingRight": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "borderSize": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipOpacity": 0.5,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontSize": "13px",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "transitionDuration": 500,
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "minHeight": 50,
 "paddingLeft": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Sans Serif Collection",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "transitionMode": "blending",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "minHeight": 1,
 "id": "Container_0C5F33A8_3BA0_A6FF_41C3_2A6652E2CE94",
 "left": 30,
 "backgroundOpacity": 0,
 "width": 271,
 "scrollBarWidth": 10,
 "children": [
  "this.Label_0C5F13A8_3BA0_A6FF_41BD_E3D21CFCE151",
  "this.Label_0C5F23A8_3BA0_A6FF_419F_468451E37918"
 ],
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "shadow": false,
 "overflow": "visible",
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": 20,
 "borderSize": 0,
 "height": 97,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "data": {
  "name": "--STICKER"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "paddingLeft": 0
},
{
 "minHeight": 1,
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "backgroundOpacity": 1,
 "children": [
  "this.Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
  "this.Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1",
  "this.Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50"
 ],
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "shadow": false,
 "overflow": "visible",
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "top": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 60,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#009900"
 ],
 "contentOpaque": false,
 "data": {
  "name": "--BUTTON SET"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.09,
 "paddingLeft": 0
},
{
 "minHeight": 1,
 "id": "Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
 "backgroundOpacity": 1,
 "width": 60,
 "scrollBarWidth": 10,
 "right": 16,
 "children": [
  "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
  "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
  "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
  "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
  "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A"
 ],
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "shadow": false,
 "overflow": "scroll",
 "propagateClick": false,
 "backgroundColorRatios": [
  0.02,
  0.65,
  0.91,
  1
 ],
 "top": 60,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 300,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#00CC33",
  "#00CC33",
  "#00CC33",
  "#00CC33"
 ],
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "-button set"
 },
 "paddingTop": 0,
 "layout": "vertical",
 "scrollBarOpacity": 0.57,
 "paddingLeft": 0
},
{
 "minHeight": 1,
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52",
  "this.IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8",
  "this.IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
  "this.IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA",
  "this.IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8",
  "this.IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93",
  "this.IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B"
 ],
 "scrollBarWidth": 10,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "shadow": false,
 "overflow": "scroll",
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 30,
 "bottom": "0%",
 "borderSize": 0,
 "height": 90,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "right",
 "gap": 3,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "data": {
  "name": "-button set container"
 },
 "paddingTop": 0,
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0
},
{
 "minHeight": 1,
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "scrollBarWidth": 10,
 "right": "0%",
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "shadow": false,
 "overflow": "scroll",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "---INFO photo"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "paddingLeft": 0
},
{
 "minHeight": 1,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "scrollBarWidth": 10,
 "right": "0%",
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "shadow": false,
 "overflow": "scroll",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "---PANORAMA LIST"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "paddingLeft": 0
},
{
 "minHeight": 1,
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "scrollBarWidth": 10,
 "right": "0%",
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "shadow": false,
 "overflow": "scroll",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "---LOCATION"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "paddingLeft": 0
},
{
 "minHeight": 1,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "scrollBarWidth": 10,
 "right": "0%",
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "shadow": false,
 "overflow": "scroll",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "---FLOORPLAN"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "paddingLeft": 0
},
{
 "minHeight": 1,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "scrollBarWidth": 10,
 "right": "0%",
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "shadow": false,
 "overflow": "scroll",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "---PHOTOALBUM"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "paddingLeft": 0
},
{
 "minHeight": 1,
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "scrollBarWidth": 10,
 "right": "0%",
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "shadow": false,
 "overflow": "scroll",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "---REALTOR"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "paddingLeft": 0
},
{
 "minHeight": 0,
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 350,
  "easing": "cubic_in_out"
 },
 "right": 0,
 "borderRadius": 0,
 "minWidth": 0,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": 0,
 "paddingRight": 0,
 "bottom": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#000000"
 ],
 "class": "UIComponent",
 "backgroundColorDirection": "vertical",
 "visible": false,
 "data": {
  "name": "UIComponent5341"
 },
 "paddingTop": 0,
 "paddingLeft": 0
},
{
 "minHeight": 0,
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "right": 0,
 "borderRadius": 0,
 "minWidth": 0,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": false,
 "backgroundColorRatios": [],
 "top": 0,
 "paddingRight": 0,
 "bottom": 0,
 "borderSize": 0,
 "backgroundColor": [],
 "class": "ZoomImage",
 "backgroundColorDirection": "vertical",
 "visible": false,
 "data": {
  "name": "ZoomImage5342"
 },
 "paddingTop": 0,
 "scaleMode": "custom",
 "paddingLeft": 0
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Arial",
 "data": {
  "name": "CloseButton5343"
 },
 "minHeight": 0,
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "fontWeight": "normal",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 350,
  "easing": "cubic_in_out"
 },
 "shadowColor": "#000000",
 "right": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "paddingBottom": 5,
 "iconWidth": 20,
 "shadow": false,
 "iconHeight": 20,
 "iconColor": "#000000",
 "propagateClick": false,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "top": 10,
 "verticalAlign": "middle",
 "paddingRight": 5,
 "borderSize": 0,
 "pressedIconColor": "#888888",
 "mode": "push",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "fontSize": "1.29vmin",
 "class": "CloseButton",
 "label": "",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "normal",
 "fontColor": "#FFFFFF",
 "rollOverIconColor": "#666666",
 "visible": false,
 "iconLineWidth": 5,
 "paddingTop": 5,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "paddingLeft": 5,
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Arial",
 "pressedIconWidth": 30,
 "minHeight": 1,
 "id": "Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "backgroundOpacity": 1,
 "width": 60,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "iconHeight": 30,
 "iconWidth": 30,
 "propagateClick": false,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "borderSize": 0,
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "mode": "toggle",
 "iconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41.png",
 "fontSize": 12,
 "class": "Button",
 "horizontalAlign": "center",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "pressedIconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41_pressed.png",
 "backgroundColor": [
  "#00CC33"
 ],
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "data": {
  "name": "Button Settings Mute"
 },
 "fontStyle": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "paddingLeft": 0,
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Arial",
 "pressedIconWidth": 30,
 "minHeight": 1,
 "id": "Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "backgroundOpacity": 1,
 "width": 60,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "iconHeight": 30,
 "iconWidth": 30,
 "propagateClick": false,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "borderSize": 0,
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "mode": "toggle",
 "iconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A.png",
 "fontSize": 12,
 "class": "Button",
 "horizontalAlign": "center",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "pressedIconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A_pressed.png",
 "backgroundColor": [
  "#00CC33"
 ],
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "data": {
  "name": "Button Settings Fullscreen"
 },
 "fontStyle": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "paddingLeft": 0,
 "shadowSpread": 1
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1F31E251_14F9_8074_41B2_AC50B5A88CE0, this.camera_27FB17DE_3A91_A167_41AF_1A808A357C8B); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_08C787E6_14B7_805C_41AA_3D00908E5A98",
   "pitch": -22.06,
   "yaw": -16.61,
   "hfov": 17.59,
   "distance": 100
  }
 ],
 "id": "overlay_07B9C813_14D9_8FF4_41A2_6E074CEED78C",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F317123_14F9_81D4_4195_EE284EE2DF2E_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -22.06,
   "hfov": 17.59
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1, this.camera_2799E7FC_3A91_A12A_41B9_7231A41C0F91); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_08C7F7E6_14B7_805C_4181_730723C25EE7",
   "pitch": -27.71,
   "yaw": 165.39,
   "hfov": 21.56,
   "distance": 100
  }
 ],
 "id": "overlay_0754AF63_14D8_8054_41A8_24C1778CB200",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 165.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F317123_14F9_81D4_4195_EE284EE2DF2E_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -27.71,
   "hfov": 21.56
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC, this.camera_2789A7EE_3A91_A127_41C6_D626F8AFAF0A); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_08C747E6_14B7_805C_4196_7F1A758E7BD6",
   "pitch": -34.02,
   "yaw": 9.66,
   "hfov": 18.92,
   "distance": 50
  }
 ],
 "id": "overlay_072E5294_14DB_80FC_41A8_5CC49E7B930C",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F317123_14F9_81D4_4195_EE284EE2DF2E_1_HS_2_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -34.02,
   "hfov": 18.92
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1F37DB00_14F9_81D4_41B1_3C8FDDA24082, this.camera_211795AC_3A91_A12A_41B8_E56EA2D19597); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_08DC07DD_14B7_806C_41B1_8D43A07CA5C9",
   "pitch": -18.47,
   "yaw": 78.23,
   "hfov": 23.1,
   "distance": 100
  }
 ],
 "id": "overlay_1B46A2D7_14F8_807C_41A8_0DB2AA2B27F6",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 78.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F31F69F_14F9_80EC_41B3_211C91BDCFDD_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -18.47,
   "hfov": 23.1
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_0AB5FE51_15B9_8074_4198_751E614320C9, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_0B764A0A_1549_85D7_41B3_4C5189261BA9, null, null, null, null, false); if(this.getGlobalAudio(this.audio_385A72C8_2395_3BD0_4159_28D68D2F59B8).get('state') == 'playing') { this.stopGlobalAudio(this.audio_385A72C8_2395_3BD0_4159_28D68D2F59B8); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_385A72C8_2395_3BD0_4159_28D68D2F59B8); }"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0D72F47B_1559_8034_41A0_8B5F028A47E7",
   "pitch": 10.75,
   "yaw": 0.35,
   "hfov": 15.4,
   "distance": 100
  }
 ],
 "id": "overlay_0390490D_14B9_81EC_419C_F4871B272F8C",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 10.75,
   "hfov": 15.4
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_0BF84BCA_15B8_8054_41B4_726030FF89FB, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_0B775A13_1549_85F5_419C_E3E3F17DC8E6, null, null, null, null, false); if(this.getGlobalAudio(this.audio_38ED0582_2397_1E57_4184_422CCC9EC0C1).get('state') == 'playing') { this.stopGlobalAudio(this.audio_38ED0582_2397_1E57_4184_422CCC9EC0C1); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_38ED0582_2397_1E57_4184_422CCC9EC0C1); }"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B5339F3_1549_8635_41B1_C4A05B0ED644",
   "pitch": 8.16,
   "yaw": -105.27,
   "hfov": 8.07,
   "distance": 100
  }
 ],
 "id": "overlay_0C93240A_14B7_87D4_41A1_E265B968D9B8",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -105.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 8.16,
   "hfov": 8.07
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC, this.camera_27C647B2_3A91_A13E_41C7_1D3EC2ED28C5); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0D72647B_1559_8034_416D_9A5CFDD84FD7",
   "pitch": -42.99,
   "yaw": 48.56,
   "hfov": 17.81,
   "distance": 100
  }
 ],
 "id": "overlay_024CBF10_154B_81F4_41AE_46E42EB9AE82",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 48.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_0_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -42.99,
   "hfov": 17.81
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_0A19F8BA_15BF_8034_41A4_69778B9F55F4, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_0B740A13_1549_85F5_41A0_497CA784A7FD, null, null, null, null, false); if(this.getGlobalAudio(this.audio_38412335_239A_FAB6_41B6_284B9799CD53).get('state') == 'playing') { this.stopGlobalAudio(this.audio_38412335_239A_FAB6_41B6_284B9799CD53); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_38412335_239A_FAB6_41B6_284B9799CD53); }"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0D73A47B_1559_8034_41AE_D582E18D45B7",
   "pitch": 11.19,
   "yaw": 99.33,
   "hfov": 12.73,
   "distance": 100
  }
 ],
 "id": "overlay_02F5D9FF_154B_802C_41B3_2905A20BA74B",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 99.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 11.19,
   "hfov": 12.73
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1F31B40F_14F9_87EC_41A6_9B19E4101F79, this.camera_27D447C2_3A91_A15E_41C4_DDC799D8D89C); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_35777D0E_1548_81EF_418A_F87C064A6C5B",
   "pitch": 6.91,
   "yaw": -117.44,
   "hfov": 7.93,
   "distance": 100
  }
 ],
 "id": "overlay_0F51B78B_1548_80D4_418F_3934FDFCB349",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -117.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_0_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 6.91,
   "hfov": 7.93
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1F3713EC_14F9_802C_41AA_2388F8C053F7, this.camera_203647A3_3A91_A1DD_4169_04B1D4EBA997); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_35770D0E_1548_81EF_4197_7B24EDF18FE1",
   "pitch": 10.08,
   "yaw": 124.14,
   "hfov": 12.32,
   "distance": 100
  }
 ],
 "id": "overlay_0F28C4DE_154F_806C_41AC_C975A6D21C8A",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 124.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_0_HS_7_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 10.08,
   "hfov": 12.32
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_0_HS_8_0.png",
      "width": 203,
      "height": 113
     }
    ]
   },
   "pitch": 10.19,
   "yaw": 133,
   "hfov": 40.71,
   "distance": 50
  }
 ],
 "id": "overlay_08D0D622_1548_83D4_4180_AED7B38F9B30",
 "data": {
  "label": "R. Pemeriksaan Umum"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 133,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_0_HS_8_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": 10.19,
   "hfov": 40.71
  }
 ],
 "rollOverDisplay": true
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_0_HS_9_0.png",
      "width": 108,
      "height": 103
     }
    ]
   },
   "pitch": 12.53,
   "yaw": 102.63,
   "hfov": 21.5,
   "distance": 50
  }
 ],
 "id": "overlay_0B60CC5C_1549_806C_41A1_A6D139E05D9E",
 "data": {
  "label": "Ruangan TB"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 102.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_0_HS_9_0_map.gif",
      "width": 16,
      "height": 15
     }
    ]
   },
   "pitch": 12.53,
   "hfov": 21.5
  }
 ],
 "rollOverDisplay": true
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_0_HS_10_0.png",
      "width": 129,
      "height": 123
     }
    ]
   },
   "pitch": 12.98,
   "yaw": -0.11,
   "hfov": 25.61,
   "distance": 50
  }
 ],
 "id": "overlay_08A5F627_1549_83DC_41AC_72FAEF49BF2A",
 "data": {
  "label": "Ruangan KIA"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_0_HS_10_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 12.98,
   "hfov": 25.61
  }
 ],
 "rollOverDisplay": true
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_0_HS_11_0.png",
      "width": 139,
      "height": 85
     }
    ]
   },
   "pitch": 10.42,
   "yaw": -98.71,
   "hfov": 27.86,
   "distance": 50
  }
 ],
 "id": "overlay_0BDFE797_1548_80FC_4171_CE143927A287",
 "data": {
  "label": "R. Pemeriksaan Anak "
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -98.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_0_HS_11_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": 10.42,
   "hfov": 27.86
  }
 ],
 "rollOverDisplay": true
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_0_HS_12_0.png",
      "width": 69,
      "height": 57
     }
    ]
   },
   "pitch": 9.71,
   "yaw": -118.91,
   "hfov": 13.92,
   "distance": 50
  }
 ],
 "id": "overlay_0BDFDD8E_1548_80EC_41B4_33B7ED4828FD",
 "data": {
  "label": "WC Umum"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -118.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_0_HS_12_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 9.71,
   "hfov": 13.92
  }
 ],
 "rollOverDisplay": true
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_3A7FF168_1548_8654_41B1_063A1A424633_0",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.70",
     "zoomFactor": 1.1,
     "y": "0.28"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_3A7FF168_1548_8654_41B1_063A1A424633_1",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.41",
     "zoomFactor": 1.1,
     "y": "0.60"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_3A7FF168_1548_8654_41B1_063A1A424633_2",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.72",
     "zoomFactor": 1.1,
     "y": "0.46"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_3A7FF168_1548_8654_41B1_063A1A424633_3",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.54",
     "zoomFactor": 1.1,
     "y": "0.68"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   }
  }
 ],
 "id": "album_3A7FF168_1548_8654_41B1_063A1A424633_AlbumPlayList"
},
{
 "minHeight": 20,
 "height": "100%",
 "id": "container_21BBF510_3A91_A6FC_41AC_092ED10A5CF1",
 "backgroundOpacity": 0.3,
 "children": [
  "this.viewer_uid21BB550F_3A91_A6E6_41C2_AFFA58A01BB4",
  {
   "minHeight": 20,
   "scrollBarWidth": 7,
   "backgroundOpacity": 0.3,
   "children": [
    "this.htmltext_21B5E511_3A91_A6FD_41C9_BC3B27F5EB4D"
   ],
   "left": 0,
   "right": 0,
   "borderRadius": 0,
   "minWidth": 20,
   "paddingBottom": 0,
   "shadow": false,
   "overflow": "scroll",
   "propagateClick": false,
   "backgroundColorRatios": [],
   "verticalAlign": "bottom",
   "paddingRight": 0,
   "bottom": 0,
   "borderSize": 0,
   "backgroundColor": [],
   "scrollBarColor": "#FFFFFF",
   "scrollBarVisible": "rollOver",
   "class": "Container",
   "horizontalAlign": "left",
   "backgroundColorDirection": "vertical",
   "gap": 10,
   "scrollBarMargin": 2,
   "scrollBarOpacity": 0.5,
   "contentOpaque": true,
   "data": {
    "name": "Container5337"
   },
   "paddingTop": 0,
   "layout": "vertical",
   "height": "30%",
   "paddingLeft": 0
  },
  "this.component_21B62514_3A91_A6FB_41B7_E8C361CFEEFC",
  "this.component_21B63514_3A91_A6FB_4198_B40716074FFD"
 ],
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 20,
 "shadow": false,
 "overflow": "scroll",
 "propagateClick": false,
 "backgroundColorRatios": [],
 "verticalAlign": "top",
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "data": {
  "name": "Container5336"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1F31E251_14F9_8074_41B2_AC50B5A88CE0, this.camera_20BFF714_3A91_A2FA_419D_E490938E5A0A); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_35750D0E_1548_81EF_415F_C3D9787A2F45",
   "pitch": -41.17,
   "yaw": -2.28,
   "hfov": 18.33,
   "distance": 100
  }
 ],
 "id": "overlay_0C60AB28_1558_81D4_41B2_F8E0888D7091",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F36CF65_14F9_805C_41A2_E7D0E2D7618B_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -41.17,
   "hfov": 18.33
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1F307DEA_14F9_8054_4191_AA88601B95A5, this.camera_2099B6F3_3A91_A33D_4186_9942B0E2CBCD); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_35765D0E_1548_81EF_4198_51C6FD7F9AEF",
   "pitch": 15.54,
   "yaw": -104.79,
   "hfov": 18.39,
   "distance": 100
  }
 ],
 "id": "overlay_0F09EBB9_154B_8034_4184_EC07A1596C17",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -104.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F3713EC_14F9_802C_41AA_2388F8C053F7_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 15.54,
   "hfov": 18.39
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F3713EC_14F9_802C_41AA_2388F8C053F7_0_HS_1_0.png",
      "width": 78,
      "height": 166
     }
    ]
   },
   "pitch": 15.4,
   "yaw": -104.28,
   "hfov": 15.32,
   "distance": 50
  }
 ],
 "id": "overlay_0B3F5111_15B9_81F4_41A7_6ADF03B1A705",
 "data": {
  "label": "Exit"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -104.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F3713EC_14F9_802C_41AA_2388F8C053F7_0_HS_1_0_map.gif",
      "width": 16,
      "height": 34
     }
    ]
   },
   "pitch": 15.4,
   "hfov": 15.32
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_359F320F_1549_85ED_41B2_56D0C37CD393, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_3675246F_1549_8E2D_4155_64EDB65FCDB4, null, null, null, null, false); if(this.getGlobalAudio(this.audio_380B660C_238F_3A3B_4182_D26C4806EE5C).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_380B660C_238F_3A3B_4182_D26C4806EE5C); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_380B660C_238F_3A3B_4182_D26C4806EE5C); }"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3655B44F_1549_8E6D_41A6_C70EABE1FE3F",
   "pitch": 12.98,
   "yaw": 148.85,
   "hfov": 16.26,
   "distance": 100
  }
 ],
 "id": "overlay_0AF5513D_154B_862D_4190_BC737ED55979",
 "data": {
  "label": "Info 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 148.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F3713EC_14F9_802C_41AA_2388F8C053F7_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 12.98,
   "hfov": 16.26
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1F3161B1_14F9_8034_41AA_378E730BF5AF, this.camera_20F436D3_3A91_A37D_41C3_A64F1CDFA533); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_08C687E6_14B7_805C_41B1_4FD7EEAA2817",
   "pitch": 1.8,
   "yaw": -81.81,
   "hfov": 16.6,
   "distance": 100
  }
 ],
 "id": "overlay_01DD6B15_14D7_81FC_41B3_87944A669E02",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -81.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.8,
   "hfov": 16.6
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_0B5F28B2_15CF_8034_4188_5B5C22A27F89, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_370BDC2D_15D7_802C_4181_6265B8FCADA4, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_08C6E7E6_14B7_805C_416D_24ED894963EA",
   "pitch": 8.93,
   "yaw": 120.34,
   "hfov": 17.29,
   "distance": 100
  }
 ],
 "id": "overlay_00685F5C_14C8_806C_4196_3DFCF8E8A4DB",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 120.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 8.93,
   "hfov": 17.29
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_3589B8A5_1559_86DD_41A1_74FAFDAC9AB9, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_36CFD38D_1548_8AED_41A7_9F937432B21D, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_08C617E6_14B7_805C_4188_7DC772B4D88E",
   "pitch": 3.05,
   "yaw": -140.72,
   "hfov": 12.9,
   "distance": 100
  }
 ],
 "id": "overlay_01C4BD07_14C8_81DC_418C_16C98F73D6CD",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -140.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 3.05,
   "hfov": 12.9
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1F313D4B_14F9_8054_4190_E14294522522, this.camera_20E4C6C1_3A91_A35D_41B4_75A04D5A88C9); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_08C5B7E6_14B7_805C_418D_AA6EFFB465B2",
   "pitch": 3.06,
   "yaw": -5.44,
   "hfov": 14.97,
   "distance": 100
  }
 ],
 "id": "overlay_00078AD5_14C9_807C_419F_70051DE2E646",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 3.06,
   "hfov": 14.97
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1F317123_14F9_81D4_4195_EE284EE2DF2E, this.camera_208A46E2_3A91_A35F_41C0_E388B3E3208A); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0D7D247B_1559_8034_41A1_0169209585CC",
   "pitch": -30.44,
   "yaw": -179.51,
   "hfov": 21,
   "distance": 100
  }
 ],
 "id": "overlay_0378F948_14B8_8054_41B3_6F230CDE7E73",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1_0_HS_5_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -30.44,
   "hfov": 21
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1_0_HS_6_0.png",
      "width": 152,
      "height": 147
     }
    ]
   },
   "pitch": 8.82,
   "yaw": 124.13,
   "hfov": 30.55,
   "distance": 50
  }
 ],
 "id": "overlay_0B29AA58_1548_8074_41B1_350D1CAACCC0",
 "data": {
  "label": "Ruangan Kepala"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 124.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1_0_HS_6_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 8.82,
   "hfov": 30.55
  }
 ],
 "rollOverDisplay": true
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1_0_HS_7_0.png",
      "width": 96,
      "height": 117
     }
    ]
   },
   "pitch": 2.44,
   "yaw": -4.13,
   "hfov": 19.59,
   "distance": 50
  }
 ],
 "id": "overlay_35517512_154B_81F4_41B0_100019AB2DCB",
 "data": {
  "label": "Ruangan Rapat"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1_0_HS_7_0_map.gif",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": 2.44,
   "hfov": 19.59
  }
 ],
 "rollOverDisplay": true
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1_0_HS_8_0.png",
      "width": 107,
      "height": 105
     }
    ]
   },
   "pitch": 3.7,
   "yaw": -81.17,
   "hfov": 21.84,
   "distance": 50
  }
 ],
 "id": "overlay_080928A7_154B_80DC_41AF_17D5D4B7438F",
 "data": {
  "label": "Ruangan UKM"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -81.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1_0_HS_8_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 3.7,
   "hfov": 21.84
  }
 ],
 "rollOverDisplay": true
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1_0_HS_9_0.png",
      "width": 97,
      "height": 100
     }
    ]
   },
   "pitch": 4.45,
   "yaw": -140.34,
   "hfov": 19.74,
   "distance": 50
  }
 ],
 "id": "overlay_0B111BA1_1548_80D4_4152_7C072BCA98E7",
 "data": {
  "label": "Ruangan Tata Usaha"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -140.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1_0_HS_9_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 4.45,
   "hfov": 19.74
  }
 ],
 "rollOverDisplay": true
},
{
 "begin": "this.updateMediaLabelFromPlayList(this.album_3A7FF168_1548_8654_41B1_063A1A424633_AlbumPlayList, this.htmltext_21B5E511_3A91_A6FD_41C9_BC3B27F5EB4D, this.albumitem_21BB3510_3A91_A6FB_41B4_F42FFE97354F); this.loopAlbum(this.playList_3B996D9C_2AF2_AB0B_418C_ECB45CFDF0A5, 0)",
 "media": "this.album_3A7FF168_1548_8654_41B1_063A1A424633",
 "class": "PhotoAlbumPlayListItem",
 "player": "this.viewer_uid21BB550F_3A91_A6E6_41C2_AFFA58A01BB4PhotoAlbumPlayer",
 "id": "albumitem_21BB3510_3A91_A6FB_41B4_F42FFE97354F"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1F37DB00_14F9_81D4_41B1_3C8FDDA24082, this.camera_20103786_3A91_A1E7_41C1_C0AF48987B5D); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_08DA77E6_14B7_805C_419C_AFE08516E07F",
   "pitch": -41.04,
   "yaw": 56.44,
   "hfov": 18.37,
   "distance": 100
  }
 ],
 "id": "overlay_06657307_14C8_81DC_4195_2A4CAB0A7788",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 56.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F349F75_14F9_803C_419C_22E547EC5CD7_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -41.04,
   "hfov": 18.37
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1F317649_14F9_8054_419D_6A9896532704, this.camera_20278795_3A91_A1E5_41C3_6101560D7B9D); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_08D9C7E6_14B7_805C_41AA_84A9178B397C",
   "pitch": 4.89,
   "yaw": -131.8,
   "hfov": 27.3,
   "distance": 100
  }
 ],
 "id": "overlay_05869899_14CB_80F4_41A1_584799C2D214",
 "data": {
  "label": "Circle Generic 03"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -131.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F349F75_14F9_803C_419C_22E547EC5CD7_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 4.89,
   "hfov": 27.3
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F349F75_14F9_803C_419C_22E547EC5CD7_0_HS_2_0.png",
      "width": 113,
      "height": 110
     }
    ]
   },
   "pitch": 7.85,
   "yaw": -130.99,
   "hfov": 22.76,
   "distance": 50
  }
 ],
 "id": "overlay_35AFAF68_1549_8054_41B1_B6DFD0F4FD8F",
 "data": {
  "label": "Ruang Salin"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -130.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F349F75_14F9_803C_419C_22E547EC5CD7_0_HS_2_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 7.85,
   "hfov": 22.76
  }
 ],
 "rollOverDisplay": true
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1, this.camera_206CF746_3A91_A166_41BB_FAD0B04FA63C); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B5E49F3_1549_8635_418C_A3A072E0CA83",
   "pitch": 3.13,
   "yaw": 119.01,
   "hfov": 15.41,
   "distance": 100
  }
 ],
 "id": "overlay_0D9935C2_155B_8054_41B3_A57BF65954BA",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 119.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F313D4B_14F9_8054_4190_E14294522522_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 3.13,
   "hfov": 15.41
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_0B11135D_154F_8A6D_41A1_31AB06EF67B1, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_0B73FA13_1549_85F5_41B4_D986C8E5AF20, null, null, null, null, false); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 10, this.audio_3BADDCB5_2395_2FBF_4193_E7AFD2A062CB)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B5E09F3_1549_8635_4192_1FC325A6C9FF",
   "pitch": -3.37,
   "yaw": -137.31,
   "hfov": 15.75,
   "distance": 100
  }
 ],
 "id": "overlay_0B6DDB66_1549_9A5F_41B1_EDAD97128C74",
 "data": {
  "label": "Info 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -137.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F313D4B_14F9_8054_4190_E14294522522_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.37,
   "hfov": 15.75
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_0B06DF52_1548_9A77_41A9_F970CD169D3F, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_0B730A13_1549_85F5_418B_E562389C8A65, null, null, null, null, false); if(this.getGlobalAudio(this.audio_3B9D604B_238A_F6E9_41BD_3229FBFEFA31).get('state') == 'playing') { this.stopGlobalAudio(this.audio_3B9D604B_238A_F6E9_41BD_3229FBFEFA31); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_3B9D604B_238A_F6E9_41BD_3229FBFEFA31); }"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B5FA9F3_1549_8635_41A9_8CB666E040DB",
   "pitch": 3.13,
   "yaw": 69.4,
   "hfov": 13.35,
   "distance": 100
  }
 ],
 "id": "overlay_0AFD8569_1549_8E55_4197_94275AFCFB57",
 "data": {
  "label": "Info 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 69.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F313D4B_14F9_8054_4190_E14294522522_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 3.13,
   "hfov": 13.35
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F313D4B_14F9_8054_4190_E14294522522_0_HS_4_0.png",
      "width": 80,
      "height": 110
     }
    ]
   },
   "pitch": 4.87,
   "yaw": 118.4,
   "hfov": 16.19,
   "distance": 50
  }
 ],
 "id": "overlay_0AC1D64A_154B_8A57_419F_A9B88550C6FC",
 "data": {
  "label": "Exit"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 118.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F313D4B_14F9_8054_4190_E14294522522_0_HS_4_0_map.gif",
      "width": 16,
      "height": 22
     }
    ]
   },
   "pitch": 4.87,
   "hfov": 16.19
  }
 ],
 "rollOverDisplay": true
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F313D4B_14F9_8054_4190_E14294522522_0_HS_5_0.png",
      "width": 133,
      "height": 95
     }
    ]
   },
   "pitch": 4.91,
   "yaw": 68.85,
   "hfov": 27.01,
   "distance": 50
  }
 ],
 "id": "overlay_0A59D076_154B_863F_41A5_9A4C37A4AF72",
 "data": {
  "label": "R. Administrasi"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 68.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F313D4B_14F9_8054_4190_E14294522522_0_HS_5_0_map.gif",
      "width": 22,
      "height": 16
     }
    ]
   },
   "pitch": 4.91,
   "hfov": 27.01
  }
 ],
 "rollOverDisplay": true
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58, this.camera_213DE686_3A91_A3E7_419C_D38DD6FFCFA0); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_08DAD7E6_14B7_805C_4151_FFE70E7EFDE3",
   "pitch": -23.01,
   "yaw": -64.64,
   "hfov": 22.41,
   "distance": 100
  }
 ],
 "id": "overlay_04AC8335_14F8_803C_41AA_1BF5D334A23C",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -64.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F37DB00_14F9_81D4_41B1_3C8FDDA24082_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -23.01,
   "hfov": 22.41
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1F349F75_14F9_803C_419C_22E547EC5CD7, this.camera_20D766B2_3A91_A33E_41C4_2D8624B4891A); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3A52ED53_238B_6FB3_41BA_0D04589237D8",
   "pitch": -35.27,
   "yaw": 106.32,
   "hfov": 21.54,
   "distance": 50
  }
 ],
 "id": "overlay_00F3BF12_14CF_81F4_41AB_E4799C2594CE",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 106.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F37DB00_14F9_81D4_41B1_3C8FDDA24082_0_HS_1_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -35.27,
   "hfov": 21.54
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1F31F69F_14F9_80EC_41B3_211C91BDCFDD, this.camera_21321695_3A91_A3FA_41AF_18D6A00980B5); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3A520D53_238B_6FB2_41B4_DF9FF4A03C32",
   "pitch": -31.01,
   "yaw": 162.79,
   "hfov": 16.22,
   "distance": 100
  }
 ],
 "id": "overlay_395F74A4_238D_7E8E_41B2_194EBEC4BA93",
 "data": {
  "label": "Arrow 06b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 162.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F37DB00_14F9_81D4_41B1_3C8FDDA24082_0_HS_2_0_0_map.gif",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -31.01,
   "hfov": 16.22
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1F307DEA_14F9_8054_4191_AA88601B95A5, this.camera_20634757_3A91_A166_41C9_713058975AEC); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_08D927E6_14B7_805C_41A0_A82AF305C91A",
   "pitch": -33.01,
   "yaw": -164.04,
   "hfov": 20.17,
   "distance": 100
  }
 ],
 "id": "overlay_06AFA240_14C9_8054_417E_805F68E9E980",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -164.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -33.01,
   "hfov": 20.17
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58, this.camera_20023777_3A91_A126_41B3_5ED5FD01FD35); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_08D967E6_14B7_805C_41A1_109CBAFF3F93",
   "pitch": -38.77,
   "yaw": 20.42,
   "hfov": 18.99,
   "distance": 100
  }
 ],
 "id": "overlay_068B8219_14C8_83F4_41A1_1F48A7617154",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 20.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -38.77,
   "hfov": 18.99
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1F317123_14F9_81D4_4195_EE284EE2DF2E, this.camera_2072D767_3A91_A126_41A4_88B3E995234F); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_08D8C7E6_14B7_805C_41A5_D3320F1BC5A6",
   "pitch": 10.93,
   "yaw": 153.14,
   "hfov": 22.76,
   "distance": 100
  }
 ],
 "id": "overlay_06B9D39E_14D7_80EC_41AF_46C97FB87E83",
 "data": {
  "label": "Circle Arrow 03"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 153.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 10.93,
   "hfov": 22.76
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_0B97FE0F_15F9_83EC_41A1_25002E15B6BC, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_357B5C6E_15F8_802C_41B4_72483618F44E, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_08D847E6_14B7_805C_41B4_2B7CE7F2E8B0",
   "pitch": 10.98,
   "yaw": -39.24,
   "hfov": 14.33,
   "distance": 100
  }
 ],
 "id": "overlay_06B0FCE1_14D8_8054_41A3_FCF1606D7606",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -39.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 10.98,
   "hfov": 14.33
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC_0_HS_4_0.png",
      "width": 153,
      "height": 111
     }
    ]
   },
   "pitch": 12.67,
   "yaw": -39.7,
   "hfov": 30.34,
   "distance": 50
  }
 ],
 "id": "overlay_355A0689_154F_80D4_418E_9118062C4687",
 "data": {
  "label": "Ruangan Farmasi"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -39.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC_0_HS_4_0_map.gif",
      "width": 22,
      "height": 16
     }
    ]
   },
   "pitch": 12.67,
   "hfov": 30.34
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC_0_HS_5_0.png",
      "width": 115,
      "height": 176
     }
    ]
   },
   "pitch": 12.65,
   "yaw": 153.39,
   "hfov": 22.79,
   "distance": 50
  }
 ],
 "id": "overlay_08D8507C_1548_802C_41A4_92610281C9B2",
 "data": {
  "label": "Lantai 2"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 153.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC_0_HS_5_0_map.gif",
      "width": 16,
      "height": 24
     }
    ]
   },
   "pitch": 12.65,
   "hfov": 22.79
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1F307DEA_14F9_8054_4191_AA88601B95A5, this.camera_27AFC80F_3A91_AEE6_41C4_276C9C1277C3); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3575AD0E_1548_81EF_4190_70DFBEF6D5D9",
   "pitch": 6.39,
   "yaw": -10.75,
   "hfov": 17.3,
   "distance": 100
  }
 ],
 "id": "overlay_0C4CB940_1559_8054_41B2_D7A250F895BC",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F31B40F_14F9_87EC_41A6_9B19E4101F79_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 6.39,
   "hfov": 17.3
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F31B40F_14F9_87EC_41A6_9B19E4101F79_0_HS_1_0.png",
      "width": 58,
      "height": 123
     }
    ]
   },
   "pitch": 10.27,
   "yaw": -10.5,
   "hfov": 11.68,
   "distance": 50
  }
 ],
 "id": "overlay_089AA7FC_15B8_802C_41A6_3879F0A2D093",
 "data": {
  "label": "Exit"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F31B40F_14F9_87EC_41A6_9B19E4101F79_0_HS_1_0_map.gif",
      "width": 16,
      "height": 33
     }
    ]
   },
   "pitch": 10.27,
   "hfov": 11.68
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1F36CF65_14F9_805C_41A2_E7D0E2D7618B, this.camera_211EB59B_3A91_A1ED_41C3_170B877BEF46); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0D73747B_1559_8034_41A7_C2B83D38A72B",
   "pitch": -39.68,
   "yaw": -57.67,
   "hfov": 18.74,
   "distance": 100
  }
 ],
 "id": "overlay_02DF738D_1548_80EC_41B3_FFA052F05161",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -57.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F31E251_14F9_8074_41B2_AC50B5A88CE0_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -39.68,
   "hfov": 18.74
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1F317123_14F9_81D4_4195_EE284EE2DF2E, this.camera_21042589_3A91_A1EA_41C9_84CDDD4CCC25); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0D70A47B_1559_8034_41B2_FEC4314430E1",
   "pitch": -33.77,
   "yaw": 34.94,
   "hfov": 20.24,
   "distance": 100
  }
 ],
 "id": "overlay_0D8AB28B_1548_80D4_419D_A10C5D25591C",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 34.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F31E251_14F9_8074_41B2_AC50B5A88CE0_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -33.77,
   "hfov": 20.24
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1, this.camera_27EBA7D0_3A91_A17B_41C6_DE79D7561603); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3576BD0E_1548_81EF_41B1_B819AFC0A9DD",
   "pitch": 5.72,
   "yaw": -53.8,
   "hfov": 16.9,
   "distance": 100
  }
 ],
 "id": "overlay_0CF74CAE_1549_802C_41B1_E79D530D1E9C",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -53.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F3161B1_14F9_8034_41AA_378E730BF5AF_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 5.72,
   "hfov": 16.9
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F3161B1_14F9_8034_41AA_378E730BF5AF_0_HS_1_0.png",
      "width": 73,
      "height": 102
     }
    ]
   },
   "pitch": 8.36,
   "yaw": -50.32,
   "hfov": 14.76,
   "distance": 50
  }
 ],
 "id": "overlay_0B1B1D75_15B9_803D_419F_693ADF26A707",
 "data": {
  "label": "Exit"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -50.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F3161B1_14F9_8034_41AA_378E730BF5AF_0_HS_1_0_map.gif",
      "width": 16,
      "height": 22
     }
    ]
   },
   "pitch": 8.36,
   "hfov": 14.76
  }
 ],
 "rollOverDisplay": true
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_0A3D4790_1579_8AF3_41B0_0AC3BA508D08, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_0AC753AB_1578_8AD5_4183_0A896956FD04, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_36D5136F_1548_8A2D_41AE_93E1927E6DFA",
   "pitch": -10.81,
   "yaw": 73.62,
   "hfov": 18.17,
   "distance": 100
  }
 ],
 "id": "overlay_0AEED481_1559_8ED5_4192_BC33CC02E5A0",
 "data": {
  "label": "Info 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 73.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F3161B1_14F9_8034_41AA_378E730BF5AF_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -10.81,
   "hfov": 18.17
  }
 ],
 "rollOverDisplay": false
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Arial",
 "pressedIconWidth": 30,
 "minHeight": 1,
 "id": "Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "backgroundOpacity": 1,
 "width": 60,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "iconHeight": 30,
 "iconWidth": 30,
 "propagateClick": false,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "rollOverIconWidth": 30,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "borderSize": 0,
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "mode": "toggle",
 "iconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA.png",
 "fontSize": 12,
 "class": "Button",
 "horizontalAlign": "center",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverIconHeight": 30,
 "gap": 5,
 "pressedIconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA_pressed.png",
 "backgroundColor": [
  "#00CC33"
 ],
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "data": {
  "name": "Button Settings HS"
 },
 "fontStyle": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "paddingLeft": 0,
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Arial",
 "pressedIconWidth": 30,
 "minHeight": 1,
 "id": "Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "backgroundOpacity": 1,
 "width": 60,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "iconHeight": 30,
 "iconWidth": 30,
 "propagateClick": false,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "rollOverIconWidth": 30,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "borderSize": 0,
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "mode": "toggle",
 "iconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467.png",
 "fontSize": 12,
 "class": "Button",
 "horizontalAlign": "center",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverIconHeight": 30,
 "gap": 5,
 "pressedIconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467_pressed.png",
 "backgroundColor": [
  "#00CC33"
 ],
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "data": {
  "name": "Button Settings Gyro"
 },
 "fontStyle": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "paddingLeft": 0,
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Arial",
 "minHeight": 1,
 "id": "Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "backgroundOpacity": 1,
 "width": 60,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "iconHeight": 30,
 "iconWidth": 30,
 "propagateClick": false,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "borderSize": 0,
 "mode": "push",
 "iconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0.png",
 "fontSize": 12,
 "class": "Button",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0_pressed.png",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "backgroundColor": [
  "#00CC33"
 ],
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button settings VR"
 },
 "fontStyle": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "paddingLeft": 0,
 "shadowSpread": 1
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC, this.camera_204F7724_3A91_A2DA_41C7_76FA4D688A45); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0D7D647B_1559_8034_4146_D65F6B41AAB6",
   "pitch": -25.3,
   "yaw": -147,
   "hfov": 15.91,
   "distance": 100
  }
 ],
 "id": "overlay_02B5930C_14C9_81EC_41B0_BC036785662E",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -147,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -25.3,
   "hfov": 15.91
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1F37DB00_14F9_81D4_41B1_3C8FDDA24082, this.camera_205D6735_3A91_A13A_41C0_5E740F59AE8A); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_08C577E6_14B7_805C_41AD_3BEF5898B344",
   "pitch": -28.62,
   "yaw": 20.71,
   "hfov": 21.38,
   "distance": 100
  }
 ],
 "id": "overlay_01838047_14C9_805C_4196_2C32D2FF947B",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 20.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -28.62,
   "hfov": 21.38
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_0BDB0E74_15B8_803C_419E_33F0236CE51C, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_0B694A0A_1549_85D7_41AF_A98998B61FF6, null, null, null, null, false); if(this.getGlobalAudio(this.audio_3B3D77A8_238D_19AB_417F_A1F413F6E03C).get('state') == 'playing') { this.stopGlobalAudio(this.audio_3B3D77A8_238D_19AB_417F_A1F413F6E03C); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_3B3D77A8_238D_19AB_417F_A1F413F6E03C); }"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0D72847B_1559_8034_41B3_F92D982786E3",
   "pitch": 1.76,
   "yaw": -94.94,
   "hfov": 13.96,
   "distance": 100
  }
 ],
 "id": "overlay_0CE7A0C5_14BB_805C_41AD_E67FF192C3E5",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -94.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.76,
   "hfov": 13.96
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58_0_HS_3_0.png",
      "width": 161,
      "height": 115
     }
    ]
   },
   "pitch": 3.72,
   "yaw": -94.45,
   "hfov": 32.64,
   "distance": 50
  }
 ],
 "id": "overlay_0AA4ADDC_1548_806C_41A6_7A9B1EC87677",
 "data": {
  "label": "Ruangan Farmasi"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -94.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58_0_HS_3_0_map.gif",
      "width": 22,
      "height": 16
     }
    ]
   },
   "pitch": 3.72,
   "hfov": 32.64
  }
 ],
 "rollOverDisplay": true
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_0A2C59DA_154B_8677_4162_0DEBE42A3216, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_36F1938F_1548_8AED_419B_144C3BD5B856, null, null, null, null, false); if(this.getGlobalAudio(this.audio_39434E72_23BD_6A0F_41B6_8ECEE8996797).get('state') == 'playing') { this.stopGlobalAudio(this.audio_39434E72_23BD_6A0F_41B6_8ECEE8996797); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_39434E72_23BD_6A0F_41B6_8ECEE8996797); }"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_36D3536D_1548_8A2D_41A5_AD88BDD5A55F",
   "pitch": 3.58,
   "yaw": -14.59,
   "hfov": 15.72,
   "distance": 100
  }
 ],
 "id": "overlay_0A096175_1557_863D_41B2_E6EBDF68E759",
 "data": {
  "label": "Info 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -14.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 3.58,
   "hfov": 15.72
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58_0_HS_5_0.png",
      "width": 123,
      "height": 109
     }
    ]
   },
   "pitch": 5.36,
   "yaw": -13.99,
   "hfov": 24.88,
   "distance": 50
  }
 ],
 "id": "overlay_0A43CFA9_1548_9AD5_4197_49CDABD8ADF6",
 "data": {
  "label": "R. Pendaftaran"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -13.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58_0_HS_5_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": 5.36,
   "hfov": 24.88
  }
 ],
 "rollOverDisplay": true
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1F349F75_14F9_803C_419C_22E547EC5CD7, this.camera_20AFB704_3A91_A2DA_41C0_B013CBD00217); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_35757D0E_1548_81EF_41B4_FAA327DEC2D6",
   "pitch": -34.52,
   "yaw": -75.08,
   "hfov": 20.06,
   "distance": 100
  }
 ],
 "id": "overlay_0CEBD2A5_1557_80DC_4199_98D948D172BE",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -75.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F317649_14F9_8054_419D_6A9896532704_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -34.52,
   "hfov": 20.06
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_0AA6834E_1558_8A6F_41AE_55F46C7907EA, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_36F9C399_1548_8AF5_41A7_C2A4BDC91476, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0B5C5A03_1549_85D5_4195_04E417E55A3A",
   "pitch": 0.41,
   "yaw": 18.09,
   "hfov": 16.98,
   "distance": 100
  }
 ],
 "id": "overlay_0B8051A7_15B8_86DD_4196_0EAF6425E5E4",
 "data": {
  "label": "Info 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 18.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F317649_14F9_8054_419D_6A9896532704_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.41,
   "hfov": 16.98
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F317649_14F9_8054_419D_6A9896532704_0_HS_2_0.png",
      "width": 147,
      "height": 127
     }
    ]
   },
   "pitch": 1.92,
   "yaw": 21.4,
   "hfov": 29.9,
   "distance": 50
  }
 ],
 "id": "overlay_0BB1F03F_15B9_862D_41A9_215BEA9DAC8C",
 "data": {
  "label": "Ruang Besalin"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 21.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_1F317649_14F9_8054_419D_6A9896532704_0_HS_2_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": 1.92,
   "hfov": 29.9
  }
 ],
 "rollOverDisplay": true
},
{
 "minHeight": 50,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "width": "14.22%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minWidth": 50,
 "paddingBottom": 0,
 "shadow": false,
 "transparencyActive": false,
 "propagateClick": false,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "top": "20%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": "20%",
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "mode": "push",
 "horizontalAlign": "center",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "maxHeight": 60,
 "data": {
  "name": "IconButton <"
 },
 "paddingTop": 0,
 "maxWidth": 60,
 "cursor": "hand",
 "paddingLeft": 0
},
{
 "minHeight": 50,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "backgroundOpacity": 0,
 "width": "14.22%",
 "right": 10,
 "borderRadius": 0,
 "minWidth": 50,
 "paddingBottom": 0,
 "shadow": false,
 "transparencyActive": false,
 "propagateClick": false,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "top": "20%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": "20%",
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "mode": "push",
 "horizontalAlign": "center",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "maxHeight": 60,
 "data": {
  "name": "IconButton >"
 },
 "paddingTop": 0,
 "maxWidth": 60,
 "cursor": "hand",
 "paddingLeft": 0
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "data": {
  "name": "text 1"
 },
 "minHeight": 1,
 "id": "Label_0C5F13A8_3BA0_A6FF_41BD_E3D21CFCE151",
 "left": 0,
 "backgroundOpacity": 0,
 "width": 239,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "shadow": false,
 "text": "LOREM",
 "textShadowBlurRadius": 10,
 "propagateClick": false,
 "fontWeight": "bold",
 "top": 5,
 "verticalAlign": "top",
 "paddingRight": 0,
 "borderSize": 0,
 "height": 67,
 "fontSize": 54,
 "class": "Label",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "textShadowHorizontalLength": 0,
 "textShadowOpacity": 1,
 "textShadowVerticalLength": 0,
 "visible": false,
 "textShadowColor": "#000000",
 "paddingTop": 0,
 "paddingLeft": 0
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "data": {
  "name": "text 2"
 },
 "minHeight": 1,
 "id": "Label_0C5F23A8_3BA0_A6FF_419F_468451E37918",
 "left": 0,
 "backgroundOpacity": 0,
 "width": 236,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "shadow": false,
 "text": "DOLOR SIT AMET",
 "textShadowBlurRadius": 10,
 "propagateClick": false,
 "fontWeight": "normal",
 "top": 66,
 "verticalAlign": "top",
 "paddingRight": 0,
 "borderSize": 0,
 "height": 32,
 "fontSize": 18,
 "class": "Label",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "textShadowHorizontalLength": 0,
 "textShadowOpacity": 1,
 "textShadowVerticalLength": 0,
 "visible": false,
 "textShadowColor": "#000000",
 "paddingTop": 0,
 "paddingLeft": 0
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "data": {
  "name": "Label Company Name"
 },
 "minHeight": 1,
 "id": "Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
 "left": "7.27%",
 "backgroundOpacity": 0,
 "width": 450,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "shadow": false,
 "text": "PUSKESMAS KARANGSARI",
 "propagateClick": false,
 "fontWeight": "normal",
 "top": "0%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": "0%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "fontSize": 31,
 "class": "Label",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "paddingTop": 0,
 "paddingLeft": 0
},
{
 "minHeight": 1,
 "id": "Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1",
 "backgroundOpacity": 0,
 "width": 1199,
 "scrollBarWidth": 10,
 "children": [
  "this.Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89"
 ],
 "borderRadius": 0,
 "minWidth": 1,
 "right": "0%",
 "shadow": false,
 "overflow": "scroll",
 "paddingBottom": 0,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "middle",
 "paddingRight": 15,
 "borderSize": 0,
 "height": 60,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "right",
 "gap": 3,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "data": {
  "name": "-button set container"
 },
 "paddingTop": 0,
 "layout": "horizontal",
 "paddingLeft": 0
},
{
 "minHeight": 1,
 "id": "Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50",
 "left": "1.05%",
 "width": "5.53%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "shadow": false,
 "url": "skin/Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50.png",
 "propagateClick": false,
 "top": "3.25%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": "0%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "class": "Image",
 "maxHeight": 80,
 "data": {
  "name": "logo"
 },
 "paddingTop": 0,
 "maxWidth": 80,
 "scaleMode": "fit_inside",
 "paddingLeft": 0
},
{
 "minHeight": 1,
 "id": "IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52",
 "backgroundOpacity": 0,
 "width": 44,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "shadow": false,
 "transparencyActive": true,
 "propagateClick": false,
 "iconURL": "skin/IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52_rollover.png",
 "mode": "push",
 "height": 44,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "maxHeight": 101,
 "visible": false,
 "data": {
  "name": "IconButton Info"
 },
 "paddingTop": 0,
 "maxWidth": 101,
 "cursor": "hand",
 "paddingLeft": 0
},
{
 "minHeight": 1,
 "id": "IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8",
 "backgroundOpacity": 0,
 "width": 44,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "shadow": false,
 "transparencyActive": true,
 "propagateClick": false,
 "iconURL": "skin/IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8_rollover.png",
 "mode": "push",
 "height": 44,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "maxHeight": 101,
 "data": {
  "name": "IconButton Thumblist"
 },
 "paddingTop": 0,
 "maxWidth": 101,
 "cursor": "hand",
 "paddingLeft": 0
},
{
 "minHeight": 1,
 "id": "IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
 "backgroundOpacity": 0,
 "width": 44,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "shadow": false,
 "transparencyActive": true,
 "propagateClick": false,
 "iconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0_rollover.png",
 "mode": "push",
 "height": 44,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "maxHeight": 101,
 "data": {
  "name": "IconButton Location"
 },
 "paddingTop": 0,
 "maxWidth": 101,
 "cursor": "hand",
 "paddingLeft": 0
},
{
 "minHeight": 1,
 "id": "IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA",
 "backgroundOpacity": 0,
 "width": 44,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "shadow": false,
 "transparencyActive": true,
 "propagateClick": true,
 "iconURL": "skin/IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA_rollover.png",
 "mode": "push",
 "height": 44,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false); this.showPopupMedia(this.window_39F8679B_15B7_8AF4_41B1_44B96943E7DF, this.album_3A7FF168_1548_8654_41B1_063A1A424633, this.playList_3B996D9C_2AF2_AB0B_418C_ECB45CFDF0A5, '70%', '70%', false, false)",
 "horizontalAlign": "center",
 "maxHeight": 101,
 "data": {
  "name": "IconButton Photoalbum"
 },
 "paddingTop": 0,
 "maxWidth": 101,
 "cursor": "hand",
 "paddingLeft": 0
},
{
 "minHeight": 1,
 "id": "IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8",
 "backgroundOpacity": 0,
 "width": 44,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "shadow": false,
 "transparencyActive": true,
 "propagateClick": false,
 "iconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8_rollover.png",
 "mode": "push",
 "height": 44,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8_pressed.png",
 "maxHeight": 101,
 "visible": false,
 "data": {
  "name": "IconButton Realtor"
 },
 "paddingTop": 0,
 "maxWidth": 101,
 "cursor": "hand",
 "paddingLeft": 0
},
{
 "minHeight": 1,
 "id": "IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93",
 "backgroundOpacity": 0,
 "width": 44,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "shadow": false,
 "transparencyActive": true,
 "propagateClick": false,
 "iconURL": "skin/IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93_rollover.png",
 "mode": "push",
 "height": 44,
 "class": "IconButton",
 "horizontalAlign": "center",
 "maxHeight": 101,
 "visible": false,
 "data": {
  "name": "IconButton Video"
 },
 "paddingTop": 0,
 "maxWidth": 101,
 "cursor": "hand",
 "paddingLeft": 0
},
{
 "minHeight": 1,
 "id": "IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B",
 "backgroundOpacity": 0,
 "width": 44,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "shadow": false,
 "transparencyActive": true,
 "propagateClick": false,
 "iconURL": "skin/IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B_rollover.png",
 "mode": "push",
 "height": 44,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "maxHeight": 101,
 "visible": false,
 "data": {
  "name": "IconButton Floorplan"
 },
 "paddingTop": 0,
 "maxWidth": 101,
 "cursor": "hand",
 "paddingLeft": 0
},
{
 "layout": "horizontal",
 "shadowVerticalLength": 0,
 "minHeight": 1,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "right": "15%",
 "shadow": true,
 "overflow": "scroll",
 "shadowOpacity": 0.3,
 "paddingBottom": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "paddingRight": 0,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadowBlurRadius": 25,
 "paddingLeft": 0,
 "shadowSpread": 1
},
{
 "minHeight": 1,
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "scrollBarWidth": 10,
 "right": "15%",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "shadow": false,
 "overflow": "visible",
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 20,
 "bottom": "80%",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "right",
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "layout": "vertical",
 "paddingLeft": 0
},
{
 "layout": "absolute",
 "shadowVerticalLength": 0,
 "minHeight": 1,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "right": "15%",
 "shadow": true,
 "overflow": "visible",
 "shadowOpacity": 0.3,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "paddingRight": 0,
 "bottom": "10%",
 "borderSize": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadowBlurRadius": 25,
 "paddingLeft": 0,
 "shadowSpread": 1
},
{
 "layout": "horizontal",
 "shadowVerticalLength": 0,
 "minHeight": 1,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "backgroundOpacity": 1,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "right": "15%",
 "shadow": true,
 "overflow": "scroll",
 "shadowOpacity": 0.3,
 "paddingBottom": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "paddingRight": 0,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadowBlurRadius": 25,
 "paddingLeft": 0,
 "shadowSpread": 1
},
{
 "minHeight": 1,
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "scrollBarWidth": 10,
 "right": "15%",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "shadow": false,
 "overflow": "visible",
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 20,
 "bottom": "80%",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "right",
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "layout": "vertical",
 "paddingLeft": 0
},
{
 "layout": "absolute",
 "shadowVerticalLength": 0,
 "minHeight": 1,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "backgroundOpacity": 1,
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "right": "15%",
 "shadow": true,
 "overflow": "visible",
 "shadowOpacity": 0.3,
 "paddingBottom": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "paddingRight": 0,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadowBlurRadius": 25,
 "paddingLeft": 0,
 "shadowSpread": 1
},
{
 "layout": "vertical",
 "shadowVerticalLength": 0,
 "minHeight": 1,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "right": "15%",
 "shadow": true,
 "overflow": "visible",
 "shadowOpacity": 0.3,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "paddingRight": 0,
 "bottom": "10%",
 "borderSize": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadowBlurRadius": 25,
 "paddingLeft": 0,
 "shadowSpread": 1
},
{
 "layout": "horizontal",
 "shadowVerticalLength": 0,
 "minHeight": 1,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "15%",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "right": "15%",
 "shadow": true,
 "overflow": "scroll",
 "shadowOpacity": 0.3,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "paddingRight": 0,
 "bottom": "10%",
 "borderSize": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadowBlurRadius": 25,
 "paddingLeft": 0,
 "shadowSpread": 1
},
{
 "minHeight": 1,
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "15%",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minWidth": 1,
 "right": "15%",
 "shadow": false,
 "overflow": "visible",
 "paddingBottom": 0,
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 20,
 "bottom": "80%",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "right",
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "layout": "vertical",
 "paddingLeft": 0
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F317123_14F9_81D4_4195_EE284EE2DF2E_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_08C787E6_14B7_805C_41AA_3D00908E5A98",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F317123_14F9_81D4_4195_EE284EE2DF2E_1_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_08C7F7E6_14B7_805C_4181_730723C25EE7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F317123_14F9_81D4_4195_EE284EE2DF2E_1_HS_2_0.png",
   "width": 520,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_08C747E6_14B7_805C_4196_7F1A758E7BD6",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F31F69F_14F9_80EC_41B3_211C91BDCFDD_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_08DC07DD_14B7_806C_41B1_8D43A07CA5C9",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_0_HS_0_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0D72F47B_1559_8034_41A0_8B5F028A47E7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_0_HS_1_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0B5339F3_1549_8635_41B1_C4A05B0ED644",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_0_HS_2_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0D72647B_1559_8034_416D_9A5CFDD84FD7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_0_HS_3_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0D73A47B_1559_8034_41AE_D582E18D45B7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_0_HS_6_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_35777D0E_1548_81EF_418A_F87C064A6C5B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F307DEA_14F9_8054_4191_AA88601B95A5_0_HS_7_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_35770D0E_1548_81EF_4197_7B24EDF18FE1",
 "frameDuration": 41
},
{
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "viewer_uid21BB550F_3A91_A6E6_41C2_AFFA58A01BB4",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 100,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "shadow": false,
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "paddingRight": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "borderSize": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "transitionDuration": 500,
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "minHeight": 50,
 "paddingLeft": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "transitionMode": "blending",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "ViewerArea5335"
 }
},
{
 "minHeight": 0,
 "id": "htmltext_21B5E511_3A91_A6FD_41C9_BC3B27F5EB4D",
 "backgroundOpacity": 0.7,
 "width": "100%",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "scrollBarWidth": 10,
 "paddingBottom": 5,
 "borderRadius": 0,
 "minWidth": 0,
 "shadow": false,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "html": "",
 "visible": false,
 "data": {
  "name": "HTMLText5338"
 },
 "paddingTop": 5,
 "scrollBarOpacity": 0.5,
 "paddingLeft": 10
},
{
 "paddingTop": 0,
 "minHeight": 0,
 "id": "component_21B62514_3A91_A6FB_41B7_E8C361CFEEFC",
 "left": 10,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 0,
 "shadow": false,
 "transparencyActive": false,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "propagateClick": false,
 "iconURL": "skin/album_left.png",
 "top": "45%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "horizontalAlign": "center",
 "class": "IconButton",
 "click": "this.loadFromCurrentMediaPlayList(this.album_3A7FF168_1548_8654_41B1_063A1A424633_AlbumPlayList, -1)",
 "visible": false,
 "data": {
  "name": "IconButton5339"
 },
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "cursor": "hand",
 "paddingLeft": 0
},
{
 "paddingTop": 0,
 "minHeight": 0,
 "id": "component_21B63514_3A91_A6FB_4198_B40716074FFD",
 "backgroundOpacity": 0,
 "right": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "paddingBottom": 0,
 "shadow": false,
 "transparencyActive": false,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "propagateClick": false,
 "iconURL": "skin/album_right.png",
 "top": "45%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "horizontalAlign": "center",
 "class": "IconButton",
 "click": "this.loadFromCurrentMediaPlayList(this.album_3A7FF168_1548_8654_41B1_063A1A424633_AlbumPlayList, 1)",
 "visible": false,
 "data": {
  "name": "IconButton5340"
 },
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "cursor": "hand",
 "paddingLeft": 0
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F36CF65_14F9_805C_41A2_E7D0E2D7618B_0_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_35750D0E_1548_81EF_415F_C3D9787A2F45",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F3713EC_14F9_802C_41AA_2388F8C053F7_0_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_35765D0E_1548_81EF_4198_51C6FD7F9AEF",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F3713EC_14F9_802C_41AA_2388F8C053F7_0_HS_2_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3655B44F_1549_8E6D_41A6_C70EABE1FE3F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1_1_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_08C687E6_14B7_805C_41B1_4FD7EEAA2817",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1_1_HS_1_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_08C6E7E6_14B7_805C_416D_24ED894963EA",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1_1_HS_2_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_08C617E6_14B7_805C_4188_7DC772B4D88E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1_1_HS_4_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_08C5B7E6_14B7_805C_418D_AA6EFFB465B2",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F30356B_14F9_8054_4194_C965D7BBE0F1_0_HS_5_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0D7D247B_1559_8034_41A1_0169209585CC",
 "frameDuration": 41
},
{
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.viewer_uid21BB550F_3A91_A6E6_41C2_AFFA58A01BB4",
 "id": "viewer_uid21BB550F_3A91_A6E6_41C2_AFFA58A01BB4PhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F349F75_14F9_803C_419C_22E547EC5CD7_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_08DA77E6_14B7_805C_419C_AFE08516E07F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F349F75_14F9_803C_419C_22E547EC5CD7_1_HS_1_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_08D9C7E6_14B7_805C_41AA_84A9178B397C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F313D4B_14F9_8054_4190_E14294522522_0_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0B5E49F3_1549_8635_418C_A3A072E0CA83",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F313D4B_14F9_8054_4190_E14294522522_0_HS_2_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0B5E09F3_1549_8635_4192_1FC325A6C9FF",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F313D4B_14F9_8054_4190_E14294522522_0_HS_3_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0B5FA9F3_1549_8635_41A9_8CB666E040DB",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F37DB00_14F9_81D4_41B1_3C8FDDA24082_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_08DAD7E6_14B7_805C_4151_FFE70E7EFDE3",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F37DB00_14F9_81D4_41B1_3C8FDDA24082_0_HS_1_0.png",
   "width": 520,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3A52ED53_238B_6FB3_41BA_0D04589237D8",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F37DB00_14F9_81D4_41B1_3C8FDDA24082_0_HS_2_0.png",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3A520D53_238B_6FB2_41B4_DF9FF4A03C32",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_08D927E6_14B7_805C_41A0_A82AF305C91A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC_1_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_08D967E6_14B7_805C_41A1_109CBAFF3F93",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC_1_HS_2_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_08D8C7E6_14B7_805C_41A5_D3320F1BC5A6",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_188C8C10_14F9_87F4_419A_5C0992E5F3CC_1_HS_3_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_08D847E6_14B7_805C_41B4_2B7CE7F2E8B0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F31B40F_14F9_87EC_41A6_9B19E4101F79_0_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3575AD0E_1548_81EF_4190_70DFBEF6D5D9",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F31E251_14F9_8074_41B2_AC50B5A88CE0_0_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0D73747B_1559_8034_41A7_C2B83D38A72B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F31E251_14F9_8074_41B2_AC50B5A88CE0_0_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0D70A47B_1559_8034_41B2_FEC4314430E1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F3161B1_14F9_8034_41AA_378E730BF5AF_0_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3576BD0E_1548_81EF_41B1_B819AFC0A9DD",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F3161B1_14F9_8034_41AA_378E730BF5AF_0_HS_2_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_36D5136F_1548_8A2D_41AE_93E1927E6DFA",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58_0_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0D7D647B_1559_8034_4146_D65F6B41AAB6",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58_1_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_08C577E6_14B7_805C_41AD_3BEF5898B344",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58_0_HS_2_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0D72847B_1559_8034_41B3_F92D982786E3",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F3009A1_14F9_80D4_41A9_E705A8C98E58_0_HS_4_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_36D3536D_1548_8A2D_41A5_AD88BDD5A55F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F317649_14F9_8054_419D_6A9896532704_0_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_35757D0E_1548_81EF_41B4_FAA327DEC2D6",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_1F317649_14F9_8054_419D_6A9896532704_0_HS_1_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0B5C5A03_1549_85D5_4195_04E417E55A3A",
 "frameDuration": 41
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Arial",
 "minHeight": 1,
 "id": "Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89",
 "backgroundOpacity": 1,
 "width": 60,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "iconHeight": 17,
 "iconWidth": 17,
 "propagateClick": false,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  0
 ],
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "borderSize": 0,
 "mode": "toggle",
 "iconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89.png",
 "fontSize": 12,
 "class": "Button",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89_pressed.png",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "if(!this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4.get('visible')){ this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, false, 0, null, null, false) }",
 "backgroundColor": [
  "#000000",
  "#006600"
 ],
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button Settings"
 },
 "fontStyle": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "paddingLeft": 0,
 "shadowSpread": 1
},
{
 "minHeight": 1,
 "height": "100%",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "width": "85%",
 "borderRadius": 0,
 "minWidth": 1,
 "shadow": false,
 "overflow": "scroll",
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0
},
{
 "minHeight": 1,
 "id": "Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
 "width": 8,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "shadow": false,
 "overflow": "scroll",
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#F7931E"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "data": {
  "name": "orange line"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "height": "100%",
 "paddingLeft": 0
},
{
 "minHeight": 1,
 "height": "100%",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "width": "50%",
 "borderRadius": 0,
 "minWidth": 460,
 "shadow": false,
 "overflow": "visible",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "paddingRight": 50,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "layout": "vertical",
 "scrollBarOpacity": 0.51,
 "paddingLeft": 50
},
{
 "minHeight": 50,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "width": "25%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minWidth": 50,
 "paddingBottom": 0,
 "shadow": false,
 "transparencyActive": false,
 "propagateClick": false,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "mode": "push",
 "horizontalAlign": "center",
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "maxHeight": 60,
 "data": {
  "name": "X"
 },
 "paddingLeft": 0,
 "paddingTop": 0,
 "maxWidth": 60,
 "cursor": "hand",
 "height": "75%"
},
{
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundOpacity": 0.3,
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 1,
 "shadow": false,
 "overflow": "scroll",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 140,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "data": {
  "name": "header"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0
},
{
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "width": "100%",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "scrollBarWidth": 10,
 "left": 0,
 "selectedItemLabelFontWeight": "bold",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "borderRadius": 5,
 "minWidth": 1,
 "itemLabelGap": 7,
 "itemLabelFontColor": "#666666",
 "paddingBottom": 70,
 "shadow": false,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "verticalAlign": "middle",
 "selectedItemLabelFontColor": "#F7931E",
 "itemPaddingBottom": 3,
 "itemBackgroundColorDirection": "vertical",
 "paddingRight": 70,
 "scrollBarColor": "#F7931E",
 "itemLabelFontStyle": "normal",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "class": "ThumbnailGrid",
 "itemMode": "normal",
 "itemThumbnailHeight": 125,
 "itemOpacity": 1,
 "itemLabelHorizontalAlign": "center",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "gap": 26,
 "itemMaxWidth": 1000,
 "itemLabelFontFamily": "Montserrat",
 "rollOverItemThumbnailShadowColor": "#F7931E",
 "height": "92%",
 "itemMaxHeight": 1000,
 "itemThumbnailWidth": 220,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "paddingLeft": 70,
 "paddingTop": 10,
 "itemHorizontalAlign": "center",
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "selectedItemThumbnailShadow": true,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "itemThumbnailShadow": false,
 "rollOverItemLabelFontColor": "#F7931E",
 "itemBackgroundOpacity": 0,
 "itemThumbnailBorderRadius": 0,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "itemWidth": 220,
 "itemBackgroundColorRatios": [],
 "bottom": -0.2,
 "itemThumbnailOpacity": 1,
 "horizontalAlign": "center",
 "itemPaddingRight": 3,
 "itemMinHeight": 50,
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "scrollBarMargin": 2,
 "rollOverItemThumbnailShadow": true,
 "itemHeight": 160,
 "itemVerticalAlign": "top",
 "itemLabelFontSize": 13,
 "data": {
  "name": "ThumbnailList"
 },
 "itemMinWidth": 50,
 "itemThumbnailScaleMode": "fit_outside",
 "selectedItemThumbnailShadowVerticalLength": 0
},
{
 "minHeight": 1,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "backgroundOpacity": 1,
 "width": "100%",
 "insetBorder": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "shadow": false,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.2151043917274!2d107.92750717405633!3d-7.101050369620104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68b61564f7b3d7%3A0xb83fbbccef6fb1c7!2sPuskesmas%20Karangsari!5e0!3m2!1sid!2sid!4v1787061236110!5m2!1sid!2sid",
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "class": "WebFrame",
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame48191"
 },
 "paddingTop": 0,
 "height": "100%",
 "paddingLeft": 0
},
{
 "minHeight": 50,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "width": "25%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minWidth": 50,
 "paddingBottom": 0,
 "shadow": false,
 "transparencyActive": false,
 "propagateClick": false,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "mode": "push",
 "horizontalAlign": "center",
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "maxHeight": 60,
 "data": {
  "name": "X"
 },
 "paddingLeft": 0,
 "paddingTop": 0,
 "maxWidth": 60,
 "cursor": "hand",
 "height": "75%"
},
{
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "id": "MapViewer",
 "toolTipPaddingTop": 7,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 1,
 "toolTipPaddingLeft": 10,
 "playbackBarHeadShadowBlurRadius": 3,
 "shadow": false,
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "paddingRight": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "borderSize": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipOpacity": 0.5,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontSize": "13px",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "transitionDuration": 500,
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "minHeight": 1,
 "paddingLeft": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Sans Serif Collection",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "transitionMode": "blending",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "minHeight": 1,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "scrollBarWidth": 10,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "shadow": false,
 "overflow": "scroll",
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "height": 140,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "data": {
  "name": "header"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0
},
{
 "minHeight": 1,
 "height": "100%",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundOpacity": 0.3,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 1,
 "shadow": false,
 "overflow": "visible",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "data": {
  "name": "Container photo"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0
},
{
 "minHeight": 1,
 "height": "100%",
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "width": "55%",
 "borderRadius": 0,
 "minWidth": 1,
 "shadow": false,
 "overflow": "scroll",
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0
},
{
 "minHeight": 1,
 "id": "Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
 "width": 8,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "shadow": false,
 "overflow": "scroll",
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#F7931E"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "data": {
  "name": "orange line"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "height": "100%",
 "paddingLeft": 0
},
{
 "minHeight": 1,
 "height": "100%",
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "width": "45%",
 "borderRadius": 0,
 "minWidth": 460,
 "shadow": false,
 "overflow": "visible",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "paddingRight": 60,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "layout": "vertical",
 "scrollBarOpacity": 0.51,
 "paddingLeft": 60
},
{
 "minHeight": 50,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "width": "25%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minWidth": 50,
 "paddingBottom": 0,
 "shadow": false,
 "transparencyActive": false,
 "propagateClick": false,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "mode": "push",
 "horizontalAlign": "center",
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "maxHeight": 60,
 "data": {
  "name": "X"
 },
 "paddingLeft": 0,
 "paddingTop": 0,
 "maxWidth": 60,
 "cursor": "hand",
 "height": "75%"
},
{
 "minHeight": 1,
 "height": "100%",
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "width": "100%",
 "left": "0%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "shadow": false,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "class": "Image",
 "maxHeight": 1000,
 "data": {
  "name": "photo"
 },
 "paddingTop": 0,
 "maxWidth": 2000,
 "scaleMode": "fit_outside",
 "paddingLeft": 0
},
{
 "minHeight": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "shadow": false,
 "overflow": "scroll",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 60,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "right",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0
},
{
 "minHeight": 520,
 "height": "100%",
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "scrollBarWidth": 10,
 "paddingBottom": 30,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 100,
 "shadow": false,
 "overflow": "scroll",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "layout": "vertical",
 "scrollBarOpacity": 0.79,
 "paddingLeft": 0
},
{
 "minHeight": 1,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "shadow": false,
 "overflow": "scroll",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 40,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0
},
{
 "minHeight": 50,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "width": "100%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minWidth": 50,
 "right": 20,
 "shadow": false,
 "transparencyActive": false,
 "paddingBottom": 0,
 "propagateClick": false,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "top": 20,
 "verticalAlign": "top",
 "paddingRight": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "mode": "push",
 "horizontalAlign": "right",
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "maxHeight": 60,
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "maxWidth": 60,
 "cursor": "hand",
 "height": "36.14%",
 "paddingLeft": 0
},
{
 "minHeight": 50,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "width": "100%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minWidth": 50,
 "right": 20,
 "shadow": false,
 "transparencyActive": false,
 "paddingBottom": 0,
 "propagateClick": false,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "top": 20,
 "verticalAlign": "top",
 "paddingRight": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "mode": "push",
 "horizontalAlign": "right",
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "maxHeight": 60,
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "maxWidth": 60,
 "cursor": "hand",
 "height": "36.14%",
 "paddingLeft": 0
},
{
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingTop": 7,
 "toolTipBorderSize": 1,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "toolTipPaddingRight": 10,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "left": "0%",
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 1,
 "toolTipPaddingLeft": 10,
 "playbackBarHeadShadowBlurRadius": 3,
 "shadow": false,
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "paddingRight": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "borderSize": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipOpacity": 0.5,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontSize": "13px",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "transitionDuration": 500,
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "minHeight": 1,
 "paddingLeft": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Sans Serif Collection",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": "0%",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "transitionMode": "blending",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "minHeight": 50,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "width": "10%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minWidth": 50,
 "right": 20,
 "shadow": false,
 "transparencyActive": false,
 "paddingBottom": 0,
 "propagateClick": false,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "top": 20,
 "verticalAlign": "top",
 "paddingRight": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "mode": "push",
 "horizontalAlign": "right",
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "maxHeight": 60,
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "maxWidth": 60,
 "cursor": "hand",
 "height": "10%",
 "paddingLeft": 0
},
{
 "minHeight": 1,
 "height": "100%",
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "width": "100%",
 "left": "0%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "shadow": false,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "bottom",
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "class": "Image",
 "maxHeight": 1000,
 "data": {
  "name": "Image"
 },
 "paddingTop": 0,
 "maxWidth": 2000,
 "scaleMode": "fit_outside",
 "paddingLeft": 0
},
{
 "minHeight": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "shadow": false,
 "overflow": "scroll",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 60,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "right",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0
},
{
 "minHeight": 520,
 "height": "100%",
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "scrollBarWidth": 10,
 "paddingBottom": 30,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 100,
 "shadow": false,
 "overflow": "scroll",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "layout": "vertical",
 "scrollBarOpacity": 0.79,
 "paddingLeft": 0
},
{
 "minHeight": 1,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "shadow": false,
 "overflow": "scroll",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 40,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0
},
{
 "minHeight": 1,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 20,
 "shadow": false,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#F7931E",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:7.23vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.7vh;font-family:'Montserrat';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.7vh;font-family:'Montserrat';\"><B>DOLOR SIT AMET</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.85vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.85vh;font-family:'Montserrat';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.85vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.85vh;font-family:'Montserrat';\"><B>DONEC FEUGIAT:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.34vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.85vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.85vh;font-family:'Montserrat';\"><B>LOREM IPSUM:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:2.69vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "paddingLeft": 10,
 "paddingTop": 0,
 "height": "100%"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Montserrat",
 "minHeight": 1,
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "backgroundOpacity": 0.8,
 "width": 180,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "iconHeight": 32,
 "iconWidth": 32,
 "propagateClick": false,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "fontWeight": "bold",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "pressedBackgroundOpacity": 1,
 "height": 50,
 "borderSize": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": "1.96vh",
 "class": "Button",
 "label": "LOREM IPSUM",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "backgroundColor": [
  "#F7931E"
 ],
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button Lorem Ipsum"
 },
 "fontStyle": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "paddingLeft": 0,
 "shadowSpread": 1
},
{
 "minHeight": 1,
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 10,
 "shadow": false,
 "propagateClick": false,
 "paddingRight": 0,
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:7.23vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.7vh;font-family:'Montserrat';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.7vh;font-family:'Montserrat';\"><B>DOLOR SIT AMET</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingLeft": 0,
 "paddingTop": 0,
 "height": "45%"
},
{
 "minHeight": 1,
 "height": "80%",
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "backgroundOpacity": 0.3,
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 1,
 "shadow": false,
 "overflow": "scroll",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "data": {
  "name": "- content"
 },
 "paddingTop": 0,
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0
},
{
 "minHeight": 1,
 "height": "100%",
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "width": "25%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "shadow": false,
 "paddingBottom": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "left",
 "class": "Image",
 "maxHeight": 200,
 "data": {
  "name": "agent photo"
 },
 "paddingLeft": 0,
 "paddingTop": 0,
 "maxWidth": 200,
 "scaleMode": "fit_inside"
},
{
 "minHeight": 1,
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "backgroundOpacity": 0,
 "width": "75%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 10,
 "shadow": false,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#F7931E",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:2.02vh;font-family:'Montserrat';\"><B>JOHN DOE</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.34vh;font-family:'Montserrat';\">LICENSED REAL ESTATE SALESPERSON</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "paddingLeft": 10,
 "paddingTop": 0,
 "height": "100%"
}],
 "borderSize": 0,
 "mobileMipmappingEnabled": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Player",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "mouseWheelEnabled": true,
 "buttonToggleFullscreen": "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "scripts": {
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getKey": function(key){  return window[key]; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "existsKey": function(key){  return key in window; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "unregisterKey": function(key){  delete window[key]; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "data": {
  "name": "Player468"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0
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
