/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

function showToast() {
    window.plugins.toast.showShortBottom('Hello Nana!');
}

var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
};
document.addEventListener(
    'deviceready',
    function () {
        window.plugins.appsFlyer.registerOnAppOpenAttribution(function (res) {
            console.log('onAppOpenAttribution ~~>' + res);
            alert('onAppOpenAttribution ~~> ' + res);
        },
            function (err) {
                console.log(err);
            });

        // if onDeepLinkListener: false or undefined, sdk will ignore registerOnDeepLink
        // window.plugins.appsFlyer.registerOnDeepLink(function (res) {
        //     console.log("DDL ~~>" + res);
        //     alert('DDL ~~>' + res);
        // });


        var options = {
            devKey: 'bMBKksLNwNoN9HghQq6EhP',
            appId: 'id4154154150',
            isDebug: true,
            onInstallConversionDataListener: true,
            // onDeepLinkListener: true, //if true, will override onAppOpenAttribution
            waitForATTUserAuthorization: 0, //--> Here you set the time for the sdk to wait before launch
        };
        window.plugins.appsFlyer.initSdk(options, function (res) {
            console.log('GCD ~~>' + res);
            alert('GCD ~~>' + res);

        }, function (err) {
            console.log(`failed ~~> ${err}`);
        });
    },
    false
);
app.initialize();
