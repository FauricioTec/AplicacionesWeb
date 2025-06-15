import { createRouter, createWebHistory } from 'vue-router'
import AboutSection from '@/views/AboutSection.vue'
import ExperienceSection from '@/views/ExperienceSection.vue'
import EducationSection from '@/views/EducationSection.vue'
import SkillsSection from '@/views/SkillsSection.vue'
import InterestsSection from '@/views/InterestsSection.vue'
import AwardsSection from '@/views/AwardsSection.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/about' },
    { path: '/about', component: AboutSection },
    { path: '/experience', component: ExperienceSection },
    { path: '/education', component: EducationSection },
    { path: '/skills', component: SkillsSection },
    { path: '/interests', component: InterestsSection },
    { path: '/awards', component: AwardsSection },
  ],
  scrollBehavior(to) {
    const sectionId = to.path.replace('/', '') || 'about'
    return {
      el: `#${sectionId}`,
      behavior: 'smooth',
    }
  },
})

export default router
