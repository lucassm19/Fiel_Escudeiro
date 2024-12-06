// import { View, Text, StyleSheet } from 'react-native';
// import * as WebBrowser from "expo-web-browser";
// import * as Linking from "expo-linking";
// import { useOAuth } from "@clerk/clerk-expo";
// import { Slot, router } from "expo-router";
// import { useState } from 'react';

// WebBrowser.maybeCompleteAuthSession()

// export default function SigIn() {

//     const [isLoading, setIsLoading] = useState(false)

//     const googleOAuth = useOAuth({ strategy: "oauth_google" })

//     async function onGoogleSignIn() {
//         try {
//             setIsLoading(true)

//             const redirectUrl = await Linking.createURL("/")
//             const oAuthFlow = await googleOAuth.startOAuthFlow({ redirectUrl })

//             if (oAuthFlow.authSessionResult?.type === "success") {
//                 if (oAuthFlow.setActive) {
//                     await oAuthFlow.setActive({ session: oAuthFlow.createdSessionId })
//                 }
//                 router.replace('/')
//             } else {
//                 setIsLoading(false)
//             }
//         } catch (err: any) {
//             console.error(JSON.stringify(err, null, 2))
//         }

//     }
// }