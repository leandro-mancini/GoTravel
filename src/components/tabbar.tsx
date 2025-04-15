import { useTheme } from "@emotion/react";
import { useRef, useState } from "react";
import { Animated, Dimensions, FlatList, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import Ripple from "react-native-material-ripple";
import { AnimatedFadeView } from "../animations";

const { width: SCREEN_WIDTH } = Dimensions.get('window');

type TabScreen = {
  key: string;
  title: string;
  component: React.ReactNode;
};

interface TabBarProps {
  screens: TabScreen[];
  style?: StyleProp<ViewStyle>;
}

export const TabBar: React.FC<TabBarProps> = ({ screens, style }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const indicator = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList>(null);
  const theme = useTheme();
    const styles = createStyles(theme);

  const handleTabPress = (index: number) => {
    flatListRef.current?.scrollToIndex({ index, animated: true });
    animateIndicator(index);
  };

  const animateIndicator = (index: number) => {
    Animated.timing(indicator, {
      toValue: index,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const progress = offsetX / SCREEN_WIDTH;
    indicator.setValue(progress);
    setActiveIndex(Math.round(progress));
  };

  const renderTabBar = () => {
    return (
      <View style={style}>
        <View style={styles.tabBar}>
          {screens.map((tab, index) => (
            <Ripple style={styles.tab} key={tab.key} onPress={() => handleTabPress(index)}>
                <Text
                    style={[
                        styles.tabText,
                        activeIndex === index && styles.tabTextActive,
                    ]}
                >{tab.title}</Text>
                {activeIndex === index && (
                  <AnimatedFadeView animation="fadeIn" style={styles.indicator}>
                    <View />
                  </AnimatedFadeView>
                )}
            </Ripple>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {renderTabBar()}
      <FlatList
        ref={flatListRef}
        data={screens}
        horizontal
        pagingEnabled
        keyExtractor={(item) => item.key}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <View style={{ width: SCREEN_WIDTH, paddingTop: 30 }}>
            {item.component}
          </View>
        )}
      />
    </View>
  );
};

const createStyles = (theme: ReturnType<typeof useTheme>) => StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    position: "relative"
  },
  tabText: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: theme.typography.fontFamily.medium,
    color: theme.colors.text.secondary[100]
  },
  tabTextActive: {
    color: theme.colors.secondary[100],
    fontFamily: theme.typography.fontFamily.semiBold
  },
  indicator: {
    backgroundColor: theme.colors.secondary[100],
    width: 10,
    height: 3,
    borderRadius: 99,
    position: "absolute",
    bottom: -4,
    left: "50%",
    transform: [{ translateX: -5 }],
    marginHorizontal: 16
  }
});

