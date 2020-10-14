package de.unijena.cheminf.lotusweb.controller


import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.core.io.Resource
import org.springframework.core.io.ResourceLoader
import org.springframework.http.HttpHeaders
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping

@Controller
class DownloadController(@Qualifier("webApplicationContext") val resourceLoader: ResourceLoader) {

    @GetMapping("/download/sdf")
    fun downloadSDFFile(): ResponseEntity<Resource> {
        val resource: Resource = resourceLoader.getResource("file:./data/np.sdf")

        val headers = HttpHeaders()
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=LOTUS_DB.sdf")

        return ResponseEntity.ok()
                .headers(headers)
                .contentType(MediaType.valueOf("chemical/x-mdl-sdfile"))
                .body(resource)
    }

    @GetMapping("/download/smiles")
    fun downloadSmilesFile(): ResponseEntity<Resource> {
        val resource: Resource = resourceLoader.getResource("file:./data/lotus.smiles")

        val headers = HttpHeaders()
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=LOTUS_DB.smi")

        return ResponseEntity.ok()
                .headers(headers)
                .contentType(MediaType.valueOf("text/plain"))
                .body(resource)
    }



    @GetMapping("/download/mongo")
    fun downloadMongoDump(): ResponseEntity<Resource> {
        val resource: Resource = resourceLoader.getResource("file:./data/LOTUSlatest.zip")

        val headers = HttpHeaders()
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=LOTUSlatest.zip")

        return ResponseEntity.ok()
                .headers(headers)
                .contentType(MediaType.valueOf("application/zip"))
                .body(resource)
    }

    @GetMapping("/download/mongoreadme")
    fun downloadMongoReadme(): ResponseEntity<Resource> {




        val resource: Resource = resourceLoader.getResource("file:./data/README.mongo4lotus")


        val headers = HttpHeaders()
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=README.mongo4lotus")

        return ResponseEntity.ok()
                .headers(headers)
                .contentType(MediaType.valueOf("text/plain"))
                .body(resource)
    }

}

