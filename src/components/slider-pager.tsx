import React, { useRef } from "react";
import { Animated, Dimensions, StyleSheet, View } from "react-native";
import Ripple from "react-native-material-ripple";
import PagerView from "react-native-pager-view";
import { BulletIndicator } from "./bullet-indicator";

const { width } = Dimensions.get("window");

interface SliderPagerProps {
  total: number;
  onFinish: () => void;
  children: React.ReactNode;
}

export const SliderPager = ({ total, onFinish, children }: SliderPagerProps) => {
  const pagerRef = useRef<PagerView>(null);
  const currentIndex = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    onFinish();
  };

  return (
    <View style={styles.slider}>
      <PagerView
        ref={pagerRef}
        style={styles.pagerView}
        initialPage={0}
        onPageSelected={(e) => {
          Animated.timing(currentIndex, {
            toValue: e.nativeEvent.position,
            duration: 300,
            useNativeDriver: false,
          }).start();
        }}
      >
        {children}
      </PagerView>
      <View style={styles.action}>
        <BulletIndicator total={total} currentIndex={currentIndex} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slider: {
    
  },
  pagerView: {
    minHeight: 210,
    paddingHorizontal: 24
  },
  action: {
    width: '100%',
    padding: 10
  }
});