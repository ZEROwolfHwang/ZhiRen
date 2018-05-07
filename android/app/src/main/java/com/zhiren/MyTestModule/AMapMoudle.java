package com.zhiren.MyTestModule;

import android.app.Activity;
import android.content.Intent;
import android.util.Log;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by zerowolf on 2018/4/17.
 */

public class AMapMoudle extends ReactContextBaseJavaModule {
    private static final int REQUEST_AMAP= 1000;
    private static final String E_ACTIVITY_DOES_NOT_EXIST = "E_ACTIVITY_DOES_NOT_EXIST";
    private static final String E_PICKER_CANCELLED = "E_PICKER_CANCELLED";
    private static final String E_FAILED_TO_SHOW_PICKER = "E_FAILED_TO_SHOW_PICKER";
    private static final String E_NO_IMAGE_DATA_FOUND = "E_NO_IMAGE_DATA_FOUND";

    private ActivityEventListener mActivityEventListener = new BaseActivityEventListener() {
        private static final String TAG = "AMapMoudle";
        @Override
        public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
            if (requestCode == REQUEST_AMAP) {
                if (mPromise!=null) {
                    if (resultCode == 2) {
                        int three = data.getIntExtra("three", 0);
//                            result.setText(String.valueOf(three));
                        Log.i(TAG, three + "");
                        mPromise.resolve(data.getIntExtra("three", 0));
                    } else {
                        mPromise.reject("ERROR","返回错误");
                    }
                    mPromise = null;
                }
            }
        }
    };
    private Promise mPromise;


    public AMapMoudle(ReactApplicationContext reactContext) {
        super(reactContext);
        reactContext.addActivityEventListener(mActivityEventListener);
    }

    @Override
    public String getName() {
        return "AMap";
    }

    @ReactMethod
    public void openMap(Promise promise) {
        Activity currentActivity = getCurrentActivity();

        mPromise = promise;
        if (currentActivity == null) {
            mPromise.reject(E_ACTIVITY_DOES_NOT_EXIST, "Activity doesn't exist");
            return;
        }
        try {
            Intent intent = new Intent(currentActivity, AMapActivity.class);
            currentActivity.startActivityForResult(intent,REQUEST_AMAP);

        } catch (Exception e) {
//            e.printStackTrace();
            mPromise.reject(E_FAILED_TO_SHOW_PICKER, e);
            mPromise = null;
        }
    }
}
