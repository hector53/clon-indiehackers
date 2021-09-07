<template>
    <div style="border-radius: 39px; opacity: 1; padding: 20px; border-radius: 20px; background-color: #fff; box-shadow: -1px 1px 5px 1px rgb(152 163 179 / 50%); margin-bottom: 20px;">
    <div class="div-block-445 d-flex">
        <h2 style="text-align: left; letter-spacing: 1.5px; color: #33558B; font-size: 18px !important; font-family: 'Space Grotesk'"><i class="fas fa-user-friends"></i> Top Grupos</h2>
    </div>
        <div class="d-flex" style="text-align: center; justify-content: center;">
        <nuxt-link to="/g/blockchain" target="_blank">
            <div style="width: 95px; height: 102px; background: #B84CA1 0% 0% no-repeat padding-box; border-radius: 30px;">
                <i class="fab fa-bitcoin" style="margin-top: 20px; color: #fff; font-size: 25px;"></i>
                <p style="color: #fff;">Blockchain</p>
            </div>
        </nuxt-link>
        <nuxt-link to="/g/fintech" target="_blank">
            <div style="width: 95px; height: 102px; background: #30C0B2 0% 0% no-repeat padding-box; border-radius: 30px; margin: 0 10px">
                <i class="fas fa-money-check-alt" style="margin-top: 20px; color: #fff; font-size: 25px;"></i>
                <p style="color: #fff;">Fintech</p>
            </div>
        </nuxt-link>
        <nuxt-link to="/g/ecommerce" target="_blank">
            <div style="width: 95px; height: 102px; background: #FF8A65 0% 0% no-repeat padding-box; box-shadow: 0px 10px 60px #B1B1B13D; border-radius: 30px;">
                <i class="fas fa-cash-register" style="margin-top: 20px; color: #fff; font-size: 25px;"></i>
                <p style="color: #fff;">eCommerce</p>
            </div>
        </nuxt-link>
        </div> 
    </div>
</template>