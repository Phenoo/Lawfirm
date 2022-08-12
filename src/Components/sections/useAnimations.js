export const useAnimations = () => {
    const transition = {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.9],
    };

    const textReveal = {
        bananin: {
            y: '200%',
            opacity: 0
        },
        bananon: {
            y: '0%',
            opacity: 1
        }
    }
    const container = {
        hidden: {
            opacity: 1,
            scale: 0
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }


    const cata = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    }
    return { transition, textReveal, container, cata };
}