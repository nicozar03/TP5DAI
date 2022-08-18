import React from "react";
import { Text, View } from "react-native"


const SavedOrder = ({ order, number }) => {
  return (
   <View>
      <Text>
        Saved order # {number + 1}
      </Text>
      <Flatlist>
        {Object.keys(order)
          .filter((key) => key !== "total")
          .map((keyName, index) => {
            return (
              <Text>
                <Text>
                  {order[keyName].quantity} x {keyName}
                </Text>

                <Text>
                  <Text>{order[keyName].readyInMinutes}</Text>
                </Text>

                <Text>
                  {Math.floor(
                    order[keyName].quantity * order[keyName].price
                  ).toString()}
                  $
                </Text>
              </Text>
            );
          })}
      </Flatlist>

      <Text>
        Total:{" "}
        <Text>
          {order.total}$
        </Text>
      </Text>
      </View>
  );
};

export default SavedOrder;