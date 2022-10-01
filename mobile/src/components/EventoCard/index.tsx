import {
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    ImageBackground,
    View
  } from "react-native";

import { styles } from "./styles";

export interface EventoCardProps {
    id: string,
    tag: string,
    titulo: string,
    descricao: string,
    dataEvento: string
}

interface Props extends TouchableOpacityProps {
    data: EventoCardProps
}

export function EventoCard({ data, ...rest }: Props) {
    return (
      <TouchableOpacity style={styles.container} {...rest}>
        <View style={styles.cover}>
            <Text style={styles.name}>{data.titulo}</Text>
            <Text style={styles.name}>{data.descricao}</Text>
            <Text style={styles.eventos}>{data.dataEvento}</Text>
            <Text style={styles.name}>{data.tag}</Text>
        </View>
      </TouchableOpacity>
    );
  }