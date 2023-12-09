import {useMutation, useQueryClient} from '@tanstack/react-query';
import {createUserAccount, signInAccount, signOutAccount} from "@/lib/appwrite/api.ts";
import {INewPost, INewUser} from "@/types";
import {createPost} from "@/lib/appwrite/api.ts";
import {QUERY_KEYS} from "@/lib/react-query/queryKeys.ts";

// ============================================================
// AUTH QUERIES
// ============================================================

export const useCreateUserAccount = () => {
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user)
    })
}

export const useSignInAccount = () => {
    return useMutation({
        mutationFn: (user: { email: string; password: string }) => signInAccount(user)
    })
}

export const useSignOutAccount = () => {
    return useMutation({
        mutationFn: signOutAccount
    })
}

// ============================================================
// POST QUERIES
// ============================================================

export const useCreatePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (post: INewPost) => createPost(post),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
            });
        },
    });
};

// ============================================================
// USER QUERIES
// ============================================================