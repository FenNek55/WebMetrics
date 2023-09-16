export const parseTestResult = (testResult) => {
    return {
        requestInfo: {
            url: testResult.url,
            status: testResult.status,
        },
        baseInfo: {
            title: testResult.title,
            description: testResult.meta_description,
            favicon: testResult.favicon,
        },
        imageInfo: {
            num_images: testResult.num_images,
            num_images_no_alt: testResult.num_images_no_alt,
        },
        ogInfo: {
            og_url: testResult.og_url,
            og_type: testResult.og_type,
            og_title: testResult.og_title,
            og_description: testResult.og_description,
            og_image: testResult.og_image,
        },
        twitterInfo: {
            twitter_card: testResult.twitter_card,
            twitter_domain: testResult.twitter_domain,
            twitter_url: testResult.twitter_url,
            twitter_title: testResult.twitter_title,
            twitter_description: testResult.twitter_description,
            twitter_image: testResult.twitter_image,
        },
    }
}