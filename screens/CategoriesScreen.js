import {CATEGORIES} from "../data/dummy-data";
import {FlatList, Pressable, Text, View} from "react-native";
import {CategoryGridTile} from "../components/CategoryGridTile";

  export const  CategoriesScreen= () => {

      const Item = ({title, color}) => {
          return(
              <View>
                  <Pressable>
                      <View>
                          <Text>
                              {title}
                          </Text>
                      </View>
                  </Pressable>
              </View>
          )
      }


      return(
          <FlatList
              data={CATEGORIES}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => <Item title={item.title}/>}
          />
      )
  }


