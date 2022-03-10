<template>
    <div>
        <HeaderSection></HeaderSection>
        <router-view></router-view>
        <FooterSection> </FooterSection>
    </div>
</template>

<script>
import HeaderSection from './layout/header.vue';
import FooterSection from './layout/footer.vue';
    export default {
        components:{HeaderSection,FooterSection},
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
