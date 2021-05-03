// Variables
import {v4 as uuid} from 'uuid';


export const scrollToDiv = (id) => {
    const elem = document.querySelector(id);
    if(elem){
        elem.scrollIntoView({behavior: "smooth"});
    }
};

export const getItemsPerSlider = () => {
    if(window.innerWidth > 1440){
        return 4
    }else if(window.innerWidth < 1440 && window.innerWidth > 1240){
        return 4
    }else if(window.innerWidth < 1240 && window.innerWidth > 1040){
        return 3
    }else if(window.innerWidth < 1040 && window.innerWidth > 500){
        return 2
    }else{
        return 1
    }
};


export const CONTENT_PATH = 'https://d2ot3z5xcrn0h2.cloudfront.net/';

export function getLessonImage(image) {
    return 'https://d2ot3z5xcrn0h2.cloudfront.net/images/module_content/' + image;
}

export function getCloudIDFromImageURL(image, source, type = 'lessons') {
    let path = '';
    if (image) {
        let imagePathSplitted = image && image?.split('/');
        if (imagePathSplitted.length > 0) {
            path = imagePathSplitted[imagePathSplitted.length - 1];
            let n = path.lastIndexOf('.');
            switch (type) {
            }
            path =
                `${source?.toLowerCase()}/${
                    cloudinaryPaths[source?.toLowerCase()]?.[type]
                }` + path.slice(0, n);
        }
    }
    return path;
}

export function getCloudIDFromImageName(image, source, type = 'lessons') {
    let path = '';
    if (image) {
        let n = image.lastIndexOf('.');
        path =
            `${source?.toLowerCase()}/${
                cloudinaryPaths[source?.toLowerCase()]?.[type]
            }` + image.slice(0, n);
    }
    return path;
}

export const cloudinaryPaths = {
    dbt: {
        exercises: 'png/exercises/',
        lessons: 'png/lessons/',
    },
    cbt: {
        exercises: 'png/exercises/',
        lessons: 'png/lessons/',
    },
    act: {
        exercises: 'exercises/',
        lessons: 'lessons/',
    },
    bodhi: {
        activities: 'activities/',
        lessons: 'lessons/',
        tracks: 'tracks/',
        community: 'community/',
        assessments: 'assessments/',
        tools: 'tools/',
        icons: 'icons/',
    },
};

export const omitDeep = (obj, key) => {
    if (Array.isArray(obj)) return omitDeepArrayWalk(obj, key);
    const keys = Object.keys(obj);
    const newObj = {};
    keys.forEach(i => {
        if (i !== key) {
            const val = obj[i];
            if (Array.isArray(val)) newObj[i] = omitDeepArrayWalk(val, key);
            else if (typeof val === "object" && val !== null)
                newObj[i] = omitDeep(val, key);
            else newObj[i] = val;
        }
    });
    return newObj;
};

const omitDeepArrayWalk = (arr, key) => {
    return arr.map(val => {
        if (Array.isArray(val)) return omitDeepArrayWalk(val, key);
        else if (typeof val === "object") return omitDeep(val, key);
        return val;
    });
};

export function generateRandomID() {
    return uuid();
}
