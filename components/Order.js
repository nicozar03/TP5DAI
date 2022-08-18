import React from "react";
import { Text, View, Pressable } from "react-native"


const Order = ({ currentOrder, currentTotal, setCurrentOrder }) => {
  return (
    <View>
        {Object.keys(currentOrder).map((keyName, index) => {
          return (
            <Text key={index}>
              <Pressable
                onClick={() => {
                  let updatedOrder = {};
                  if (currentOrder[keyName].quantity - 1 === 0) {
                    for (let i in currentOrder) {
                      if (i !== keyName)
                        updatedOrder[i] = currentOrder[keyName];
                    }
                    setCurrentOrder(updatedOrder);
                  } else {
                    updatedOrder = { ...currentOrder };
                    updatedOrder[keyName].quantity--;
                    setCurrentOrder(updatedOrder);
                  }
                }}
              >
              </Pressable>

              <Text>
                {currentOrder[keyName].quantity} x {keyName}
                </Text>
              

              <View>
                <Text>{currentOrder[keyName].readyInMinutes}</Text>
                </View>

              <Text>
                {Math.floor(
                  currentOrder[keyName].quantity * currentOrder[keyName].price
                ).toString()}
                $
              </Text>
            </Text>
          );
        })}

    

      <Text>
        Total:{" "}
        <Text>
          {currentTotal}$
        </Text>
      </Text>
      </View>
  );
};

export default Order;