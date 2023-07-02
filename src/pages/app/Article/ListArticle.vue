<template>
    <v-container>
        <v-table fixed-header hover height="100%" density="compact">
            <thead>
                <tr>
                    <th class="text-center">
                        Designation
                    </th>
                    <th class="text-center">
                        Unité
                    </th>
                    <th class="text-center">
                        Prix d'achat
                    </th>
                    <th class="text-center">
                        Prix de vente
                    </th>
                    <th class="text-center">
                        Quantité restant
                    </th>
                    <th class="text-center">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in articles" :key="item.designation">
                    <td>{{ item.designation }}</td>
                    <td>{{ item.unite }}</td>
                    <td>{{ item.prix_achat }}</td>
                    <td>{{ item.prix_vente }}</td>
                    <td>{{ item.available }}</td>
                    <td class="text-center">
                        <v-btn color="primary" variant="tonal" rounded="xs" size="x-small" icon="fa fa-edit"></v-btn>
                        <v-btn color="error" variant="tonal" rounded="xs" size="x-small" icon="fa fa-trash"></v-btn>
                    </td>
                </tr>
            </tbody>
        </v-table>
        <v-pagination :length="9"></v-pagination>
    </v-container>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            articles: [
                {
                    designation: "THB PM",
                    prix_achat: 12000,
                    prix_vente: 14000,
                    unite: null,
                    available: 2,
                },
                {
                    designation: "THB GM",
                    prix_achat: 15000,
                    prix_vente: 20000,
                    unite: null,
                    available: 4,
                },
                {
                    designation: "Paquet de Good Luck",
                    prix_achat: 35000,
                    prix_vente: 40000,
                    unite: null,
                    available: 2,
                },
                {
                    designation: "Paquet de Melia Blond",
                    prix_achat: 23000,
                    prix_vente: 30000,
                    unite: null,
                    available: 0,
                },
                {
                    designation: "Boisson Star plastique 1.5L",
                    prix_achat: 20000,
                    prix_vente: 25000,
                    unite: null,
                    available: 1,
                },
            ],
        }
    }
});
</script>