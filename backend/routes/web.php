<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::post('/oauth-login', [OAuthController::class, 'handle']);
