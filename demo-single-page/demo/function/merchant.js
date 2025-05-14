import { ref } from 'vue'
export const isChangeMerchantName = ref(false)
export const isChangeMerchantCaptcha = ref(false)
export const merchant = ref({merchant_name:'' , merchant_img: '', merchant_uid: '',merchant_headshot: ''})
export const login_merchant = ref({ merchant_email:'',  merchant_captcha:'' });
export const isCheckMerchant = ref(false);