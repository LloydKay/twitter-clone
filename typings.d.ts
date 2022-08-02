export interface Tweet extends Tweetbody {
    _id: string
    _createdAt: string
    _updatedAt: string
    _rev: string
    _type: 'tweet'
    blockTweet: boolean
}

export type Tweetbody = {
    text: string
    username: string
    profileImg: string
    image?: string
}

export type Commentbody = {
    comment: string
    tweetId: string
    username: string
    profileImg: string
}

export interface Comment extends Commentbody {
    _createdAt: string
    _id: string
    _updatedAt: string
    _rev: string
    _type: 'comment'
    tweet: {
        _ref: string
        _type: 'reference'
    }
}