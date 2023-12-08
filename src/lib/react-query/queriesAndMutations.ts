import {
    useQuery,
    useMutation,
    useQueryClient,
    useInfiniteQuery
} from '@tanstack/react-query';
import {createUserAccount, signInAccount} from "@/lib/appwrite/api.ts";
import {INewUser} from "@/types";
import {account, appwriteConfig, databases} from "@/lib/appwrite/config.ts";
import {Query} from "appwrite";

export const useCreateUserAccount = () => {
    return useMutation({
        mutationFn:(user: INewUser) => createUserAccount(user)
})
}

export const useSignInAccount = () => {
    return useMutation({
        mutationFn:(user: { email: string; password: string }) => signInAccount(user)
})
}

export async function getCurrentUser() {
    try {
        const currentAccount = await account.get();

        if (!currentAccount) throw Error;
        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )

        return currentUser.documents[0];

    } catch (error) {
        console.log(error)
    }
}