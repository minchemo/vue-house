import { defineStore, acceptHMRUpdate } from "pinia"
import { ref, computed } from "vue"

export const useGlobalStore = defineStore("global", () => {
    const loading = ref(true)

    const hideLoading = () => {
        loading.value = false
    }

    const showLoading = () => {
        loading.value = true
    }

    return { loading, hideLoading, showLoading }
})

if (
    import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useGlobalStore,
        import.meta.hot))
}