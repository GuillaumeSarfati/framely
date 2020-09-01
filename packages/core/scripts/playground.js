import * as models from 'app/models'

const script = async () => {

    const profile = await models.Profile.create({
        username: 'guillaume',
        description: 'blablabla 2',
        avatar: 'https://scontent-mrs2-1.cdninstagram.com/v/t51.2885-19/s320x320/81067034_2502148086706491_6184251872535117824_n.jpg?_nc_ht=scontent-mrs2-1.cdninstagram.com&_nc_ohc=CARjK5yn0Q0AX_5J83b&oh=8a49956126801202fadf64cfa56bb56f&oe=5F62422A'
    });

    console.log('profile created: ', profile)

    let picture = await models.Picture.create({
        url: 'https://scontent-mrs2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/73036543_172690900595093_4397623653850141263_n.jpg?_nc_ht=scontent-mrs2-1.cdninstagram.com&_nc_cat=105&_nc_ohc=j5wCTOxrYG0AX-qneA_&oh=746808114a787c19dceaed3e14a3dad4&oe=5F62E07A',
        profileId: profile.id,
    })

    picture = await models.Picture.create({
        url: 'https://scontent-mrs2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/74693462_2465645727039879_1119631752581059505_n.jpg?_nc_ht=scontent-mrs2-1.cdninstagram.com&_nc_cat=103&_nc_ohc=fV6IYWtk-UMAX_G36Q9&oh=b949a2b4fad800ff139d2237202343b1&oe=5F626B80',
        profileId: profile.id,
    })
    picture = await models.Picture.create({
        url: 'https://scontent-mrs2-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c107.0.750.750a/s640x640/82272506_618699305369690_4044400001579504319_n.jpg?_nc_ht=scontent-mrs2-2.cdninstagram.com&_nc_cat=102&_nc_ohc=LXBV84fAeWIAX8RMTkV&oh=2509b833adf345981734610308d93681&oe=5F62C883',
        profileId: profile.id,
    })
    picture = await models.Picture.create({
        url: 'https://scontent-mrs2-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/117618889_109586670763211_9192649763257305314_n.jpg?_nc_ht=scontent-mrs2-1.cdninstagram.com&_nc_cat=111&_nc_ohc=SHIQuNWETA8AX_PYHR9&oh=eb8b43659e0a305e267f67c90f1f77fe&oe=5F64CAC4',
        profileId: profile.id,
    })

    const profiles = await models.Profile.find({ include: 'pictures' })

    console.log('profiles : ', profiles)
    for (const _profile of profiles) {
        console.log('------------------------------')
        console.log('profile : ', _profile)
    }

    // console.log('profiles : ', profiles)
    
    
}


script()
.finally(() => process.exit(0))