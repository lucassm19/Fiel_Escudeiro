import { View, Text, StyleSheet, Button } from 'react-native';
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
//import { Slot, router } from "expo-router";
import { useEffect, useState } from 'react';

import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession()

export default function SigIn() {
    
    //const [isLoading, setIsLoading] = useState(false)
    const GoogleOAuth = useOAuth({ strategy: "oauth_google" })

    async function onGoogleSignIn() {
        //const [isLoading, setIsLoading] = useState(false)

        const googleOAuth = useOAuth({ strategy: "oauth_google" })

        async function onGoogleSignIn() {
            try {
                //setIsLoading(true)

                const redirectUrl = await Linking.createURL("/")
                const oAuthFlow = await googleOAuth.startOAuthFlow({ redirectUrl })

                if (oAuthFlow.authSessionResult?.type === "success") {
                    if (oAuthFlow.setActive) {
                        await oAuthFlow.setActive({ session: oAuthFlow.createdSessionId })
                    }
                } else {
                    //setIsLoading(false)
                }
            } catch (error) {
                console.log(error)
                //setIsLoading(false)
            }

        }
    }

    useEffect(() => {
        WebBrowser.warmUpAsync()

        return () => {
            WebBrowser.coolDownAsync()
        }
    }, [])

    return (
        <View>
            <Text>Entrar</Text>
            <Button title='Entrar com Google' onPress={onGoogleSignIn}/>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        justifyContent: "center",
        gap: 12,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
    }
})