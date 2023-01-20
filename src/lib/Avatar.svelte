<script lang="ts">
	import {
		AmbientLight,
		DirectionalLight,
		OrbitControls,
		PerspectiveCamera,
		Mesh
	} from '@threlte/core'
	import { DEG2RAD } from 'three/src/math/MathUtils'
  import { GLTF, useGltfAnimations } from '@threlte/extras'

  const { gltf } = useGltfAnimations<'Armature|mixamo.com|Layer0'>(({ actions }) => {
		actions['Armature|mixamo.com|Layer0']?.play()
	})
</script>

<PerspectiveCamera position={{ x: 1, y: 1.7, z: 1.3 }} near={0.1} far={100}>
	<OrbitControls
		maxPolarAngle={DEG2RAD * 80}
		enableRotate={true}
		enableZoom={false}
		target={{ y: 2.9 }}
	/>
</PerspectiveCamera>

<AmbientLight />
<DirectionalLight position={{ y: 10, z: 10, x: 10 }} />

<GLTF bind:gltf={$gltf} url="glbs/model.glb" useDraco="https://www.gstatic.com/draco/v1/decoders/" scale={2}/>