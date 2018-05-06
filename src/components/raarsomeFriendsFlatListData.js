var imageName = (name) => {
    switch (name) {
        case 'a': return require('../img/KidExercise.jpg'); break;
        case 'b': return require('../img/KidExercise2.jpg'); break;
        case 'c': return require('../img/KidExercise3.jpg'); break;
        case 'd': return require('../img/KidExercise4.jpg'); break;
        case 'e': return require('../img/KidExercise5.jpg'); break;
        case 'f': return require('../img/KidExercise6.jpg'); break;
        default: return require('../img/KidExercise6.jpg');
    }
};

export var raarsomeFriendsFlatListData = [
    {
        friendID: 'abcde',
        labelFood:'#RaarsomeCarb200g',
        labelActivity: '#Carb200g',
        imageActivity: imageName('a'),
        imageFood: imageName('a')
        
    },
    {
        friendID: 'sdfg',
        labelFood:'#RaarsomeCarb200g',
        labelActivity: '#Carb200g',
        imageActivity: imageName('b'),
        imageFood: imageName('b')
        
    },
    {
        friendID: 'abcdsfgde',
        labelFood:'#RaarsomeCarb200g',
        labelActivity: '#Carb200g',
        imageActivity: imageName('c'),
        imageFood: imageName('c')
        
    },
    {
        friendID: 'retewt',
        labelFood:'#RaarsomeCarb200g',
        labelActivity: '#Carb200g',
        imageActivity: imageName('d'),
        imageFood: imageName('d')
        
    },
    {
        friendID: 'fghjk',
        labelFood:'#RaarsomeCarb200g',
        labelActivity: '#Carb200g',
        imageActivity: imageName('e'),
        imageFood: imageName('e')
        
    },
    {
        friendID: 'fghj',
        labelFood:'#RaarsomeCarb200g',
        labelActivity: '#Carb200g',
        imageActivity: imageName('f'),
        imageFood: imageName('f')
        
    },
    {
        friendID: 'zxcvz',
        labelFood:'#RaarsomeCarb200g',
        labelActivity: '#Carb200g',
        imageActivity: imageName('e'),
        imageFood: imageName('e')
        
    }

];

