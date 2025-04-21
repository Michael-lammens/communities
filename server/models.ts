import mongoose from 'mongoose'

const CommunityMembership = mongoose.model(
    'CommunityMembership',
    new mongoose.Schema({}, { strict: false }),
    'communityMemberships'
)

const Community = mongoose.model(
    'Community',
    new mongoose.Schema({}, { strict: false }),
    'communities'
)

const ListingV1 = mongoose.model(
    'ListingV1',
    new mongoose.Schema({}, { strict: false }),
    'ListingsV1'
)

const Product = mongoose.model(
    'Product',
    new mongoose.Schema({}, { strict: false }),
    'products'
)

const User = mongoose.model(
    'User',
    new mongoose.Schema({}, { strict: false }),
    'users'
)

export {
    CommunityMembership,
    Community,
    ListingV1,
    Product,
    User
}
