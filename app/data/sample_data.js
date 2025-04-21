export const sampleJoinedChannels = [
    {
        _id: '0000000000001',
        name: 'Dialist Wholesale Club',
        creator: 'dialist',
        last_updated: 'September 02, 2024 03:44 AM',
        avatar: null, // uses https://ui-avatars.com/api/?name=name when avatar is null
    },
    {
        _id: '0000000000002',
        name: 'Dialist Dealers Canada',
        creator: 'dialist',
        last_updated: 'September 02, 2024 03:44 AM',
        avatar: null, // uses https://ui-avatars.com/api/?name=name when avatar is null
    },

    {
        _id: '0000000000003',
        name: 'MZW Wholesale',
        creator: 'private',
        last_updated: 'September 02, 2024 03:44 AM',
        avatar: null, // uses https://ui-avatars.com/api/?name=name when avatar is null
    },

    {
        _id: '0000000000004',
        name: 'MZW Wholesale',
        creator: 'private',
        last_updated: 'September 02, 2024 03:44 AM',
        avatar: null, // uses https://ui-avatars.com/api/?name=name when avatar is null
    },

];






const channel_public = {
    _id: "0000000000000",
    name: "Marketplace",
    description: "Dialist Marketplace visible to everyone, featuring listings from verified sellers.",
    visibility: "public",
    visibilityRef: null,
    permissions: {
        view: "public",
        create: ["user_dealer", "private_seller"],
        manage: ["admin", "moderator"],
    },
    checkoutFlow: "escrow",
    rules: {
        priceMax: 50000,
        priceMin: 250,
        imagesMax: 12,
        imagesMin: 2,
    }
}

const channel_vintage_club = {
    _id: "1111111111111",
    name: "Vintage Watch Club",
    description: "Exclusive listing space for members of the Vintage Watch Club. All posts are reviewed by moderators before going live.",
    visibility: "community",

    visibilityRef: "community_vwc_001",

    permissions: {
        view: "members",
        create: ["member"],
        manage: ["owner", "moderator"],
    },

    checkoutFlow: "mazal",

    rules: {
        priceMax: 15000,
        priceMin: 500,
        moderationRequired: true
    }
}


/*
*
*
* */