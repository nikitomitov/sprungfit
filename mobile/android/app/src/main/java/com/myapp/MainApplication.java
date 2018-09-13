package com.myapp;

import android.app.Application;
import com.facebook.react.ReactPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.reactnativenavigation.NavigationApplication;

import java.util.Arrays;
import java.util.List;


public class MainApplication extends NavigationApplication {

    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }


    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new VectorIconsPackage()
      );
    }

    @Override
    public void onCreate() {
        super.onCreate();
    }

     @Override
     public List<ReactPackage> createAdditionalReactPackages() {
         return getPackages();
     }  

}
