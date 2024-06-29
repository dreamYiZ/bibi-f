import create from 'zustand'
import { persist } from 'zustand/middleware'

const BG_TYPE = {
    IMAGE: 'image',
    VIDEO: 'video',
}

const MODE = {
    EDIT: 'edit',
    DISPLAY: 'display',
    TEST: 'test',
}

const useGlobalStore = create(persist(
    (set, get) => ({
        bg: {
            type: BG_TYPE.IMAGE
        },
        mode: MODE.EDIT,  // 默认为 'edit' 模式
        setMode: (_mode) => set(() => ({ mode: _mode })),  // 添加一个新的动作来更新 'mode' 状态
        setBoxArr: (_boxArr) => set((state) => ({ boxArr: _boxArr })),
    }),

    {
        name: 'global-storage', // unique name
        getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
    }
))

export default useGlobalStore;