package com.riseapps.reactnativebaseproject;

import android.os.Bundle;
import android.widget.ImageView;

import androidx.annotation.Nullable;

import com.reactnativenavigation.NavigationActivity;

public class MainActivity extends NavigationActivity {
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.splash);
    }
}
